
const Feedback = ({reviews,total,positive}) => {
    return (
    <div>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
            <p>Bad: {reviews.bad}</p>
            <p>Total:{total}</p>
            <p>Positive: {positive}%</p>
    </div>
        
    )
    
};

export default Feedback;