import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const calculatePercentege = (packed, total) => {
    if (total === 0) {
      return 0;
    }
    return (packed / total) * 100;
  };

  const length = items.length;

  const packedItems = items.filter((item) => item.packed === true).length;
  const percentege = Math.round(calculatePercentege(packedItems, length));

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  const handleAddItems = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleUpdateItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
        items={items}
        onClearList={handleClearList}
      />
      <Stats
        totalItems={length}
        packedItems={packedItems}
        percentege={percentege}
      />
    </div>
  );
}

export default App;
