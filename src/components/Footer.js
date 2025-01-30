const Footer = ({ items, numItems }) => {
  const packedItems = items.reduce(
    (acc, curr) => (curr.packed === true ? acc + 1 : acc),
    0
  );
  const percentage = packedItems
    ? ((packedItems / numItems) * 100).toFixed(2)
    : 0;

  return (
    <footer>
      <p>
        {percentage !== 100
          ? `You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage} %)`
          : "You are ready to go!"}
      </p>
    </footer>
  );
};
export default Footer;
