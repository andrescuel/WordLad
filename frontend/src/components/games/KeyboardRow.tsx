import { Button } from "@nextui-org/button";
import { TiBackspaceOutline } from "react-icons/ti";
import { KeyboardKey } from "./KeyboardKey";

type Props = {
  keys: string[];
};

export default function KeyboardRow(props: Props) {
  const { keys } = props;

  return (
    <div className="flex space-x-1">
      {keys.map((key, i) => {
        const content =
          key === "Backspace"
            ? () => <TiBackspaceOutline size="21" />
            : () => key;

        return key === "Enter" || key === "Backspace" ? (
          <KeyboardKey
            isIconOnly
            size="lg"
            key={i}
            disableRipple
          >
            {content()}
          </KeyboardKey>
        ) : (
          <KeyboardKey isIconOnly size="md" key={i} disableRipple={true} >
            {content()}
          </KeyboardKey>
        );
      })}
    </div>
  );
}
