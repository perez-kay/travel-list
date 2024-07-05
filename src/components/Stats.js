export default function Stats({ items }) {
  if (!items.length)
    return <footer className="stats">Start adding some items!</footer>;
  const numItems = items.length;
  const numPacked = items.reduce(
    (acc, item) => (item.packed === true ? acc + 1 : acc),
    0
  );
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(typeof percentage);
  return (
    <footer className="stats">
      {percentage === 100
        ? 'You got everything! Ready to go!'
        : `You have ${numItems} items on your list and you already packed ${numPacked} (${
            isNaN(percentage) ? 0 : percentage
          }%)`}
    </footer>
  );
}
