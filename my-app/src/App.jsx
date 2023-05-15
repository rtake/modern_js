import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const contentStyle = {
    color: "blue",
    fontSize: "22px"
  };

  return (
    <>
      <hl style={{ color: "red" }}>こんにちは！</hl>
      <ColoredMessage color="blue">"お元気ですか？" </ColoredMessage>
      <ColoredMessage color="pink">"元気です！" </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  )
}