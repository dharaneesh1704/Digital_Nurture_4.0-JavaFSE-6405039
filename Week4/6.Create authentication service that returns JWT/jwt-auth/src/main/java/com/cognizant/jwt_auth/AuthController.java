package com.cognizant.jwt_auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.Map;

@RestController
public class AuthController {

    private final Key secretKey = Keys.hmacShaKeyFor("myverylongsecretkeythatisatleast32bytes!".getBytes(StandardCharsets.UTF_8));

    @PostMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing or invalid Authorization header");
        }

        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String decodedCredentials = new String(decodedBytes, StandardCharsets.UTF_8);

        String[] credentials = decodedCredentials.split(":", 2);

        if (credentials.length != 2) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Authorization header format");
        }

        String username = credentials[0];
        String password = credentials[1];

        if (!"user".equals(username) || !"pwd".equals(password)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }

        String jwt = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 10 * 60 * 1000)) // 10 min expiry
                .signWith(secretKey)
                .compact();

        return Map.of("token", jwt);
    }
}
