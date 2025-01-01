import org.springframework.stereotype.Service;

@Service
public class SentimentAnalysisService {

    public Sentiment analyzeSentiment(String text) {
        // Placeholder for sentiment analysis logic
        // You can use libraries like VADER or pre-trained ML models
        Sentiment sentiment = new Sentiment();
        
        // Example logic:
        if (text.contains("happy") || text.contains("good")) {
            sentiment.setSentimentType("Positive");
            sentiment.setPercentage(85);
        } else if (text.contains("sad") || text.contains("bad")) {
            sentiment.setSentimentType("Negative");
            sentiment.setPercentage(65);
        } else {
            sentiment.setSentimentType("Neutral");
            sentiment.setPercentage(50);
        }
        
        return sentiment;
    }
}
