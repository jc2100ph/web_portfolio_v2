import FirstPageComponent from "./components/first_page/FirstPageComponent"

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory grid place-items-center h-screen w-screen bg-black overflow-scroll">
        <FirstPageComponent />
        <div className="snap-center shrink-0 bg-orange-700 w-[96vw] h-[93vh] m-[5%]"></div>
        <div className="snap-center shrink-0 bg-red-500 w-[96vw] h-[93vh] m-[5%]"></div>
      </div>
    </>
  )
}

export default App
