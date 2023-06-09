import FirstPageComponent from "./components/first_page/FirstPageComponent"
import SecondPageComponent from "./components/second_page/SecondPageComponent"
import ThirdPageComponent from "./components/third_page/ThirdPageComponent"

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory grid place-items-center h-screen w-screen bg-black overflow-scroll">
        <FirstPageComponent />
        <SecondPageComponent />
        <ThirdPageComponent />
      </div>
    </>
  )
}

export default App
