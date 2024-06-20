import { useState } from "react";
import Resource from "../../components/Resource/Resource";
import styles from "./Home.module.scss";

export type Resources = {
  skill: number;
  attack: number;
  boot: number;
};

export type ResourceKey = keyof Resources;

const Home = () => {
  const [defaultAmount, _] = useState<Resources>({
    skill: 0,
    attack: 0,
    boot: 0,
  });
  const [amount, setAmount] = useState<Resources>({ ...defaultAmount });

  const handleChangeAmount = (value: number, name: string) => {
    const newAmount = amount;
    newAmount[name as ResourceKey] = value;
    console.log(newAmount);
    setAmount({ ...newAmount });
  };

  const resetValues = () => {
    setAmount({ ...defaultAmount });
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <em>Clank!</em>
        <br />
        Resource Counter
      </h1>
      <div className={styles.resources}>
        <Resource
          amount={amount.skill}
          onChangeAmount={handleChangeAmount}
          name="skill"
        />
        <Resource
          amount={amount.attack}
          onChangeAmount={handleChangeAmount}
          name="attack"
        />
        <Resource
          amount={amount.boot}
          onChangeAmount={handleChangeAmount}
          name="boot"
        />
      </div>
      <button onClick={resetValues} className={styles.reset}>
        Reset
      </button>
      <p className={styles.copyright}>&copy; Chaomans - 2024</p>
    </main>
  );
};

export default Home;
