import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {
    //generic escribir codigo flexible y reusable
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {


        const itemExist = order.find(orderItem => orderItem.id === item.id)
        //se utiliza el .find para enncontrar un elemento en la condicion de item.id
        /**devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. 
         * Si ningún valor satisface la función de prueba, undefinedse devuelve */

        if (itemExist) {

            const updateOrder = order.map(orderItem => orderItem.id === item.id ?
                {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                } : orderItem)

            setOrder(updateOrder)

        }
        else {
            //creamos un nuevo ite
            /*const newItem: OrderItem = {
                ...item,
                quantity: 1*/

            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }

    }
    const removeItem = (id:MenuItem['id'])=>{
        //console.log("Eliminando item" , id)
        const eliminandoItem = order.filter(orderItem => orderItem.id != id)
        setOrder(eliminandoItem)
    }
    const guardarOrden = () => {
        setOrder([])
        setTip(0)
    }


    console.log(order)
    return {
        order,
        tip,
        setTip, 
        addItem,//exportamos el addItem
        removeItem,
        guardarOrden
    }
}