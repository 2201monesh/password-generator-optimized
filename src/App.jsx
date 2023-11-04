import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) str+= '0123456789';
    if(charAllowed) str+= '!@#$%&*(){}-+=_?~`';

    for(let i = 0; i <= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className='w-2/4 mx-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text" 
           className='outline-none w-full py-1 px-3' 
           value={password}
           placeholder='password'
           readOnly
           />
           <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range" className='cursor-pointer' min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex-item-center gap-x-1'>
            <input type="checkbox" id="characterInput" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label htmlFor="characterInput"> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
