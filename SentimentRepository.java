import org.springframework.data.jpa.repository.JpaRepository;

public interface SentimentRepo extends JpaRepository<Sentiment, Integer> {}
