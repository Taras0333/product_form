import { useState, useRef } from "react";
import { handleAddBullet } from "../../../utilities/utils";
import { useFieldArray } from "react-hook-form";
import Button from "react-bootstrap/Button";
import BulletsList from "./bulletsList";
import Error from "../../errorMessage";

const ProductBullets = ({ error, control }) => {
  const { message } = error || {};
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const aditionalClass = isOpen ? "animated-input-active" : "";
  const buttonContent = isOpen ? "Add" : "+";

  const { fields, append, remove, move } = useFieldArray({
    name: "product_bullets",
    control,
  });

  return (
    <div className="field_wrapper">
      <label>Product Bullets</label>
      <div className="inner-field-wrapper">
        <Button
          className="add-bullet-btn"
          onClick={() =>
            handleAddBullet({ isOpen, setIsOpen, inputRef, append })
          }
        >
          {buttonContent}
        </Button>
        <input
          className={`input-filed animated-input ${aditionalClass}`}
          style={
            message && {
              border: "1px solid #ff6a6a",
            }
          }
          ref={inputRef}
        />
      </div>
      <Error error={message} />
      <BulletsList fields={fields} remove={remove} move={move} />
    </div>
  );
};

export default ProductBullets;
