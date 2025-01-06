import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import TipsForm from "./components/TipsForm";
import TotalesConsumos from "./components/TotalesConsumos";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

export default function App() {
  const { order, addItem, deleteOrder, tip, setTip } = useOrder();

  return (
    <>
      <header className=" text-xl bg-teal-400 text-center py-5">
        <h1 className=" text-4xl font-black">
          {" "}
          Calculadora de Propinas y Consumos
        </h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {/* se puede enviar clases desde el padre hacia los hijos */}
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem} // agregamos el hook al componente MenuItem para agregar items al carrito
              />
            ))}
          </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order}
            deleteOrder={deleteOrder} // agregamos el hook al componente OrderContents para eliminar items del carrito
          />
          <div>
            <TipsForm 
            setTip={setTip}
            />
          </div>
          <div>
            <TotalesConsumos order={order} tip={tip} />
          </div>
        </div>
      </main>
    </>
  );
}
