
import { Dispatch, SetStateAction } from 'react'
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipsCompraProps = {
    setTip: Dispatch<SetStateAction<number>>
  }
const TipsCompra = ({setTip}: TipsCompraProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Propinas:</h3>
        <form>
            {
                tipOptions.map((tips) => (
                    <div key={tips.id} className="flex gap-2">
                        <label htmlFor={tips.id}>{tips.label}</label>
                        <input 
                            type="radio"
                            name="tip" 
                            value={tips.value}
                            id={tips.id}
                            onChange={ e => setTip(+e.target.value)}
                            >
                        </input>

                    </div>
                    
                ))
            }
        </form>
    </div>
  )
}

export default TipsCompra