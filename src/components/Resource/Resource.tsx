import { useState } from "react";
import { ResourceKey, Resources } from "../../pages/Home/Home";

type ResourceProps = {
  name: string;
  amounts: Resources;
  setAmount: React.Dispatch<Resources>;
};

const Resource = ({ name, amounts, setAmount }: ResourceProps) => {
  const [currentAmount, setCurrentAmount] = useState<number>(
    amounts[name as ResourceKey]
  );

  const onChangeAmount = (value: number) => {
    const newAmount = amounts;
    newAmount[name as ResourceKey] = value;
    setAmount(newAmount);
    setCurrentAmount(value);
  };

  return (
    <div className="resource">
      <button
        className="remove"
        onClick={() =>
          currentAmount === 0 ? () => {} : onChangeAmount(currentAmount - 1)
        }
      >
        -
      </button>
      <input
        type="number"
        pattern="[0-9]*"
        value={amounts[name as ResourceKey]}
        onChange={(e) => onChangeAmount(parseInt(e.target.value))}
      />
      <div className="resource_icon">
        <img src={`/assets/${name}.png`} alt={`icon for ${name}`} />
      </div>
      <button className="add" onClick={() => onChangeAmount(currentAmount + 1)}>
        +
      </button>
    </div>
  );
};

export default Resource;
