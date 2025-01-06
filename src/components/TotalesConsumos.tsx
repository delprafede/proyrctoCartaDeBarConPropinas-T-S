import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type TotalesConsumosPrps = {
  order: OrderItem[];
  tip: number
};
const TotalesConsumos = ({ order, tip }: TotalesConsumosPrps) => {
  const orderTotal = useMemo(
    () => order.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    [order]
  );
  
  const tipPercentage = useMemo(() => ( orderTotal * tip 
   ), [tip, orderTotal]);
    
    const totalOrder = useMemo(
      () => order.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) + 0,
      [order]
    );
  return (
    <div className="  space-y-3">
      <h2 className=" text-2xl font-black ">Totales y Consumos</h2>
      <p>
        Subtotal a pagar:
        <span className=" font-bold">{formatCurrency(orderTotal)}</span>
      </p>
      <p>
        Propina:<span className=" font-bold"> {formatCurrency(tipPercentage)}</span>
      </p>
      <p>
        Total a pagar:{" "}
        <span className=" font-bold"> {formatCurrency(totalOrder + tipPercentage)}</span>
      </p>
      <button className=" w-full bg-black text-white py-3">
        GUARDAR ORDEN
      </button>
    </div>
  );
};

export default TotalesConsumos;
