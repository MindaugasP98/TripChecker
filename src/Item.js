const Item = ({ item, id, onDeleteItem, onUpdateItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onUpdateItem(item.id);
        }}
      ></input>
      <span
        key={id}
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.count} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
