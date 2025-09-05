package com.example.musicsystem.controller;

import com.example.musicsystem.model.User;
import com.example.musicsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    UserService service;
    @PostMapping("/register")
    public User register(@RequestBody User user)
    {
        System.out.println(user.getName());
        return service.register(user);
    }

}
