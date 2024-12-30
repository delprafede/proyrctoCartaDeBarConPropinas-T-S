import type { MenuItems } from "../types"

type MenuItemProps = {
  item : MenuItems,
  addItem: (item: MenuItems) => void
}


const MenuItem = ({item, addItem}: MenuItemProps) => {


 
  return (
    <button 
    onClick={()=>addItem(item)}
    className=" border-2 border-teal-300 w-full p-3 flex justify-between rounded-lg  hover:bg-teal-200">
     <p>{item.name}</p>
     <p className=" font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem
