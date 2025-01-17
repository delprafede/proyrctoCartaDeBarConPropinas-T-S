import { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipsFormProps = {
  setTip: Dispatch<SetStateAction<number>>
}
const TipsForm = ({setTip}: TipsFormProps) => {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tip) => (
          <div className=" flex gap-2">
            <label key={tip.id} htmlFor={tip.id}>
              {tip.label}
            </label>
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              onChange={e=> setTip(+e.target.value)}
              // checked={tip.value > 0}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipsForm;
