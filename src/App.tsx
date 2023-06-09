import FirstPageComponent from "./components/first_page/FirstPageComponent"
import SecondPageComponent from "./components/second_page/SecondPageComponent"

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory grid place-items-center h-screen w-screen bg-black overflow-scroll">
        <FirstPageComponent />
        <SecondPageComponent />
        <div className="snap-center shrink-0 bg-red-500 w-[96vw] h-[93vh] m-[5%]"></div>
      </div>
    </>
  )
}

export default App
