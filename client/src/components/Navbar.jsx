/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
export const Navbar = () => {
  return (
    <Disclosure as='nav' className='bg-transparent border-b-2 border-grey'>
      {({ open }) => (
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex-1 flex items-center justify-around'>
              {/* NOTE Bloques */}

              {/* NOTE Bloque-1 */}
              <div className='text-xs flex items-center w-96 justify-around'>
                <div className='flex items-center'>
                  <MenuIcon className='h-8 w-8 text-black' />
                  <h2>MENÚ</h2>
                </div>

                <div className='flex relative w-56'>
                  <input className='border-2 border-primary transition h-10 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-sm ' placeholder='Buscar' />
                  <button type='submit' className='absolute right-2 top-3 mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* NOTE Bloque-2 */}
              <div className='cursor-pointer flex-shrink-0 flex items-center'>
                <img width='300' src='https://d1.awsstatic.com/case-studies/LATAM/La_Nacion_Logo.svg.d8b82ae7bb763cda05bf77d2306ee96925c56a20.png' alt='logo'/>
              </div>

              {/* NOTE Bloque-3 */}
              <div className='flex-shrink-0 flex justify-around items-center w-64'>
                <button className='bg-yellow-300 px-3 py-2 rounded-sm text-xs font-bold'>SUSCRIBETE</button>
                <button className='border-2 border-blue-500 text-blue-600 hover:text-white bg-transparent hover:bg-blue-600 px-3 py-2 rounded-sm text-xs font-bold'>INGRESAR</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  )
}
