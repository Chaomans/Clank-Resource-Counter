import styles from "./Resource.module.scss";

type ResourceProps = {
  name: string;
  amount: number;
  onChangeAmount: (value: number, name: string) => void;
};

const Resource = ({ name, amount, onChangeAmount }: ResourceProps) => {
  return (
    <div className={styles.resource}>
      <button
        className={styles.remove}
        onClick={() =>
          amount === 0 ? () => {} : onChangeAmount(amount - 1, name)
        }
      >
        -
      </button>
      <input
        type="number"
        pattern="[0-9]*"
        value={amount}
        className={styles.input}
        onChange={(e) => onChangeAmount(parseInt(e.target.value), name)}
      />
      <div className={styles.resourceIcon}>
        <img
          className={styles.img}
          src={`/assets/${name}.png`}
          alt={`icon for ${name}`}
        />
      </div>
      <button
        className={styles.add}
        onClick={() => onChangeAmount(amount + 1, name)}
      >
        +
      </button>
    </div>
  );
};

export default Resource;
