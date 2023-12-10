import { handleDeleteBullet } from "../../../utilities/utils";
import { Draggable } from "react-beautiful-dnd";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import BinIcon from "../../../assets/bin.svg";

const BulletItem = ({ value, id, index, remove }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          className="bullet-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Button
            className="bullet-btn"
            onClick={() => handleDeleteBullet({ index, remove })}
          >
            <img src={BinIcon} alt="bin icon" />
          </Button>
          <span>{value}</span>
        </Container>
      )}
    </Draggable>
  );
};

export default BulletItem;
