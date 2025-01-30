import { useState } from "react";
import Item from "./Item";

const PackingList = ({
  items,
  onDeleteItems,
  onCheckedItems,
  onClearItems,
}) => {
  let sortedItems;

  const [sortedBy, setSortedBy] = useState("input");
  if (sortedBy === "input") sortedItems = items;
  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <ul className="packing-list-container">
        {sortedItems.map((i) => (
          <Item
            item={i}
            key={i.id}
            onDeleteItems={onDeleteItems}
            onCheckedItems={onCheckedItems}
          />
        ))}
      </ul>

      {items.length ? (
        <div className="sort-container">
          <select
            value={sortedBy}
            onChange={(e) => setSortedBy(e.target.value)}
          >
            <option value="input">Sort by Input</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by Packed</option>
          </select>
          <button className="clear-items-button" onClick={() => onClearItems()}>
            Clear Items
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default PackingList;
