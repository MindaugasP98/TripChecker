const Stats = ({ totalItems, packedItems, percentege }) => {
  console.log(totalItems);
  if (totalItems === 0)
    return <p className="stats"> Start adding items to your packing list</p>;
  return (
    <footer className="stats">
      {percentege !== 100.0 ? (
        <em>
          {" "}
          You have {totalItems} Items on your list, and you already packed{" "}
          {packedItems} ({percentege}%){" "}
        </em>
      ) : (
        <em>You got everything! Ready to go ✈</em>
      )}
    </footer>
  );
};

export default Stats;
