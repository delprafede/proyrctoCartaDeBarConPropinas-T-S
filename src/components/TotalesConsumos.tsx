import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type TotalesConsumosPrps = {
  order: OrderItem[];
};
const TotalesConsumos = ({ order }: TotalesConsumosPrps) => {
  return (
    <div className="  space-y-3">
      <h2 className=" text-2xl font-black ">Totales y Consumos</h2>
      <p>
        Subtotal a pagat:{" "}
        {formatCurrency(
          order.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        )}
      </p>
      <p>Propina: $ 0</p>
      <p>Total a pagar: {
        formatCurrency(
          order.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) +
            0
        )
       }

      </p>
      <button className=" w-full bg-black text-white py-3">
        GUARDAR ORDEN
      </button>
    </div>
  );
};

export default TotalesConsumos;
