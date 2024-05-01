import { menuItems } from './data/db'
import MenuItem from "./components/MenuItem"
import useOrder from './hooks/useOrder'
import OrderTotal from './components/OrderTotal'
import TipsCompra from './components/TipsCompra'
import OrderContent from './components/OrderContent'

function App() {

  const { order, tip, setTip, addItem, removeItem, guardarOrden } = useOrder()//estoy importando el hook

  return (
    <>
      <header className="bg-green-300 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menu</h2>
          <div className='space-y-3 mt-10 '>
            {
              menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}

                />
              ))
            }

          </div>

        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {
            order.length === 0 ? <p className='text-center'>Esta Vacio</p>
              : (
                <>
                  <OrderContent
                    order={order}
                    removeItem={removeItem}
                  />
                  <div >
                    <TipsCompra
                      setTip={setTip}
                    />
                    <OrderTotal
                      order={order}
                      tip={tip}
                      guardarOrden={guardarOrden}
                    />
                  </div>
                </>
              )
          }
        </div>
      </main>
    </>
  )
}

export default App
