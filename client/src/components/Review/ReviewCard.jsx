import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Review(props) {
    const {rating,name,review,date}=props;
  return (
    <Card>
    <Card.Header>Rating:{" "+rating}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {review}
        </Card.Text>
        <p>Posted At: {date}</p>
      </Card.Body>
    </Card>
  );
}

export default Review;