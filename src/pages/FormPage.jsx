import Card from "react-bootstrap/Card";
import Form from "../components/form";

const FormPage = () => {
  return (
    <div className="App">
      <Card>
        <Card.Header>Add your Product</Card.Header>
        <Card.Body>
          <Form />
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormPage;
