import { useState } from "react"
import { MenuItems, OrderItem } from "../types"


const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

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
    const deleteOrder = (id: MenuItems["id"]) => {
        
     
        const updatedOrder = order.filter((i) => i.id !== id)
        setOrder(updatedOrder)
    }
    

    return {
        addItem,
        order,
        deleteOrder,
        tip,
        setTip,

    }
}
export default useOrder
