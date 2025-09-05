import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/songs")
public class MusicController {

    private final MusicService musicService;

    public MusicController(MusicService musicService) {
        this.musicService = musicService;
    }


    @PostMapping("/upload")
    public ResponseEntity<Music> uploadSong(
            @RequestParam("title") String title,
            @RequestParam("artist") String artist,
            @RequestParam("tags") List<String> tags,
            @RequestParam("file") MultipartFile file) throws IOException {
        Music saved = musicService.saveSong(title, artist, tags, file);
        return ResponseEntity.ok(saved);
    }


    @GetMapping
    public List<Music> getAllSongs() {
        return musicService.getAllSongs();
    }


    @GetMapping("/{id}/download")
    public ResponseEntity<byte[]> downloadSong(@PathVariable String id) {
        Music song = musicService.getSongById(id);
        if (song == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + song.getTitle() + ".mp3\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(song.getAudioData().getData());
    }
}
