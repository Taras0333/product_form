import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { handleDragBullet } from "../../../utilities/utils";
import BulletItem from "./bulletItem";
import Stack from "react-bootstrap/Stack";

const BulletsList = ({ fields, remove, move }) => {
  return (
    <DragDropContext onDragEnd={(result) => handleDragBullet(result, move)}>
      <Droppable droppableId="bullets">
        {(provided) => (
          <Stack
            className="bullets-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {fields.map(({ value, id }, index) => {
              return (
                <BulletItem
                  key={id}
                  id={id}
                  value={value}
                  index={index}
                  remove={remove}
                />
              );
            })}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BulletsList;
