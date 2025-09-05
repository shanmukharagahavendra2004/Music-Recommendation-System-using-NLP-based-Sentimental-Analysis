package com.example.musicsystem.repo;


import com.example.musicsystem.model.Music;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MusicRepo extends MongoRepository<Music, String>
{

}
