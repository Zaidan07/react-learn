import { useState } from "react";
import CounterValue from "./CounterValue";

export default function Counter() {
  const [value, setValue] = useState(0);
  const [lamp, setLamp] = useState(false);

  const Add = () => {
    setValue(value + 1);
  };
  const Min = () => {
    setValue(value - 1);
  };

  const HandleLamp = () => {
    setLamp(lamp === true ? false : true);
  }

  return (
    <div>
      <div>
        <CounterValue counter={value}/>
        <button onClick={Add}>Tambah</button>
        <button onClick={Min}>Kurang</button>
      </div>
      <div>
        <button onClick={HandleLamp}>{lamp === false ? 'Off' : 'On' }</button>
      </div>

      {lamp === true ? <div>Ini Baru Hidup</div> : <div>Ini baru Mati</div>}
    </div>
  );
}
