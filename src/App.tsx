import logo from '/logo.svg'
import tank from '/tank.png'
import './App.css'

function App() {

  return (
    <>
      <div className="lawn-mower">
        <img className="logo center-absolute"src={logo} alt="" />
        <h1 className='brand-name center-absolute'>STELARIS</h1>
        <p className='text center-absolute'>Introducing Our <strong>Lawn Mower</strong></p>
        <div className="tank">
          <div className="shadow"></div>
          <img className="tank-img center-absolute"src={tank} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
