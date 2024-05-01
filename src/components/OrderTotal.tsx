
import { useMemo } from 'react'
import type { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps = {

    order: OrderItem[]
    tip: number,
    guardarOrden: () => void
   }
const orderTotal = ({order, tip, guardarOrden} : OrderTotalProps) => {

    const subTotalAumount = useMemo(()=> order.reduce((total, item) => total + (item.quantity * item.price) , 0),[order])
    const propPorcentaje = useMemo(()=> subTotalAumount * tip, [tip, order])
    const totalPagar = useMemo(()=> subTotalAumount + propPorcentaje, [tip, order])
 return (
        <>
            <div className="space-y-3 ">
                <h2 className="font-black text-2xl">Totales y Propinas</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subTotalAumount)}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(propPorcentaje)}</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-bold">{formatCurrency(totalPagar

                    )}</span>
                </p>

            </div>

            <button 
                className='w-full bg-green-500 text-white p-5 uppercase font-bold rounded mt-5 '
                onClick={guardarOrden}
                >

                        Guardar Orden
            </button>

        </>
    )
}

export default orderTotal