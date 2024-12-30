import { useState } from "react"
import { MenuItems, OrderItem } from "../types"


const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    //   const [total, setTotal] = useState(0)
    //   const [auth, setAuth] = useState(false)

    const addItem = (item: MenuItems) => {
        const existingItem = order.find((i) => i.id === item.id)
        if (existingItem) {
            const updatedOrder = order.map((i) => i.id === item.id ? {
                ...i, quantity:
                    i.quantity + 1
            } : i)
            setOrder(updatedOrder)
        } else {


            const newItems = { ...item, quantity: 1 }
            setOrder([...order, newItems])
        }
    }

    console.log(order)

    return {
        addItem
    }
}
export default useOrder
