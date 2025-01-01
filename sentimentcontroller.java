import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SentimentController {

    @Autowired
    private SentimentAnalysisService sentimentAnalysisService;

    @PostMapping("/analyze")
    public Sentiment analyzeText(@RequestBody String text) {
        return sentimentAnalysisService.analyzeSentiment(text);
    }
}
