import { useEffect, useState } from "react";
import Resource from "../../components/Resource/Resource";

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
  const [amount, setAmount] = useState<Resources>(defaultAmount);

  // const handleChangeDefaultAmount = (value: number, name: string) => {
  //   const newDefaultAmount = amount;
  //   newDefaultAmount[name as ResourceKey] = value;
  //   setDefaultAmount(newDefaultAmount);
  // };

  useEffect(() => {}, [amount, defaultAmount]);

  return (
    <main>
      <h1>
        Clank!
        <br />
        Resource Counter
      </h1>
      <div className="resources">
        <Resource amounts={amount} setAmount={setAmount} name="skill" />
        <Resource amounts={amount} setAmount={setAmount} name="attack" />
        <Resource amounts={amount} setAmount={setAmount} name="boot" />
      </div>
      <button>Reset</button>
      <p>&copy; Chaomans - 2024</p>
    </main>
  );
};

export default Home;
