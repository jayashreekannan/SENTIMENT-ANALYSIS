import javax.persistence.*;

@Entity
public class Sentiment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String sentimentType; // Positive, Negative, Neutral
    private int percentage; // Sentiment score percentage
    
    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getSentimentType() { return sentimentType; }
    public void setSentimentType(String sentimentType) { this.sentimentType = sentimentType; }
    public int getPercentage() { return percentage; }
    public void setPercentage(int percentage) { this.percentage = percentage; }
}
