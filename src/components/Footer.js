import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            This is my first react app in Boostrap
          </p>
          <footer className="blockquote-footer">
            Lailatul <cite title="Source Title">Fitriyah</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Footer;