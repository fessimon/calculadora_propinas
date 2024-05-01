import type { MenuItem } from '../types'

//definimos un type nuevo
type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
    }

const MenuItem = ({ item , addItem }: MenuItemProps) => {
    return (
        <button
            className='border-2 border-green-300 rounded-lg hover:bg-green-200 p-3 w-full flex justify-between'
            onClick={()=> addItem(item)}
            >
            <p>
                {item.name}
            </p>
            <p className='font-black'>
                ${item.price}
            </p>
        </button>
    )
}

export default MenuItem
