
// import { Heading } from 'lucide-react'
import { Suspense } from 'react'
import './App.css'
import CountBox from './Components/CountBox'
import Heading from './Components/Heading'
import Navbar from './Components/Navbar'
import OrderContainer from './Components/OrderContainer'
import { ToastContainer } from 'react-toastify'


const fetchPromise = async () => {
  const res = await fetch("/orders.json")
  return res.json()
}

function App() {

  const ordersPromise = fetchPromise()

  return (
    <>
      <header className='w-11/12 mx-auto'>
        <Navbar></Navbar>
      </header>

      <main>
        <section className='py-5'>
          <Heading>Tabu Kitchen</Heading>
        </section>

        <section>
          <Suspense fallback={<h2>Wait Here.... </h2>}>
            <OrderContainer ordersPromise={ordersPromise}></OrderContainer>
          </Suspense>
        </section>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
      />

    </>
  )
}

export default App
