package com.example.musicsystem.service;

import com.example.musicsystem.model.User;
import com.example.musicsystem.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo repo;
    public User register(User user)
    {
        return repo.save(user);
    }
}
