package com.Hotel.Management;

import com.Hotel.Management.JWT_Token_Generation;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JWT_Token_Generation jwtService;

    public JwtAuthenticationFilter(JWT_Token_Generation jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");

        System.out.println("Incoming Request: " + request.getMethod() + " " + request.getRequestURI());

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            System.out.println("No valid Authorization header found.");
            filterChain.doFilter(request, response);
            return;
        }

        try {
            String jwt = authHeader.substring(7);
            String userEmail = jwtService.extractEmail(jwt);
            List<String> userRoles = Collections.singletonList(jwtService.extractRole(jwt)); // Ensure this method returns List<String>

            System.out.println("Extracted Email: " + userEmail);
            System.out.println("Extracted Roles: " + userRoles);

            if (userEmail == null || userRoles == null || userRoles.isEmpty()) {
                System.out.println("Invalid JWT: Missing user details.");
                filterChain.doFilter(request, response);
                return;
            }

            if (SecurityContextHolder.getContext().getAuthentication() == null) {
                // Convert roles to GrantedAuthority format
                List<GrantedAuthority> authorities = userRoles.stream()
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

                UserDetails userDetails = new User(userEmail, "", authorities);

                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, authorities);

                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authToken);
                System.out.println("User authenticated successfully.");
                System.out.println("Security Context Auth: " + SecurityContextHolder.getContext().getAuthentication());
            }
        } catch (Exception e) {
            System.out.println("JWT Authentication failed: " + e.getMessage());
        }

        filterChain.doFilter(request, response);
    }
}
