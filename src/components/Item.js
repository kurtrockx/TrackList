const Item = ({ item, onDeleteItems, onCheckedItems }) => {
  return (
    <li>
      {
        <div key={item.id} className="item">
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onCheckedItems(item)}
          ></input>
          {item.packed === false ? (
            <span>
              {item.quantity} {item.description}
            </span>
          ) : (
            <s>
              {item.quantity} {item.description}
            </s>
          )}
          <button onClick={() => onDeleteItems(item)}>❌</button>
        </div>
      }
    </li>
  );
};

export default Item;
