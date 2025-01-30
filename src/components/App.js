import { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const numItems = items.length;

  const handleAddItems = (item) => {
    setItems((i) => [...i, item]);
  };

  const handleDeleteItems = (item) => {
    setItems(() => items.filter((i) => i.id !== item.id));
  };

  const handleCheckedItems = (item) => {
    setItems(() =>
      items.map((i) => (i.id === item.id ? { ...i, packed: !i.packed } : i))
    );
  };

  const handleClearItems = () => {
    const confirmed = window.confirm("Clear all items?");
    confirmed && setItems([]);
  };

  useEffect(() => {
    const saveToBrowser = () => {
      localStorage.setItem("items", JSON.stringify(items));
    };
    saveToBrowser();
  }, [items]);

  return (
    <div className="app-container">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheckedItems={handleCheckedItems}
        onClearItems={handleClearItems}
      />
      <Footer items={items} numItems={numItems} />
    </div>
  );
};

export default App;
