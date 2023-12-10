export const logFormData = (data) => console.log(data);

export const handleAddBullet = ({ isOpen, setIsOpen, inputRef, append }) => {
  if (isOpen) {
    const { value } = inputRef.current;
    if (value) append({ value });
    inputRef.current.value = "";
    return;
  }
  setIsOpen((prev) => !prev);
};

export const handleDeleteBullet = ({ index, remove }) => {
  remove(index);
};

export const handleDragBullet = ({ source, destination }, move) => {
  const itemIndex = source.index;
  const destinationIndex = destination?.index;
  if (destinationIndex !== undefined) move(itemIndex, destinationIndex);
};
