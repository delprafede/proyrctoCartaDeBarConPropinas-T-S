import { formatCurrency } from "../helpers";
import { MenuItems, OrderItem } from "../types";


type OrderContentsProps = {
  order: OrderItem[];
  deleteOrder: (item: MenuItems["id"]) => void;
};

const OrderContents = ({ order, deleteOrder }: OrderContentsProps) => {
  return (
    <div>
      <h2 className=" font-black text-4xl">Consumos</h2>
      <div className=" space-y-3 mt-10 ">
        {order.length === 0 ? (
          <p className=" text-center">
            Aún no has agregado ningún item al la lista.
          </p>
        ) : (
          <>
            <div>
              {order.map((item) => (
                <div
                  key={item.id}
                  className=" flex justify-between border-t border-gray-300 py-5 last-of-type: border-b items-center"
                >
                  <div className="  ">
                    <p>
                      {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className=" text-sm font-black">
                      Cantidad: {item.quantity} -{" "}
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteOrder(item.id)}
                    className=" bg-red-600 h-7 w-7 rounded-full text-white font-black"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          
          </>
        )}
      </div>
    </div>
  );
};
export default OrderContents;
