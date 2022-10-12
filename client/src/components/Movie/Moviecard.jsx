import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MovieCard(props) {
  return (
    <Card>
      <Card.Header as="h5">{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.year}</Card.Title>
        <Card.Text>
        {props.plot}
        </Card.Text>
        <p> added By   {props.username}</p>
        <Button style={{margin:'10px'}} onClick={() =>{
            props.click(props.id)
        }} variant="primary">Approve</Button>
        <Button variant="danger">Reject</Button>
      </Card.Body>
    </Card>
  );
}