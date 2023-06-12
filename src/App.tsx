import FirstPageComponent from "./components/first_page/FirstPageComponent"
import SecondPageComponent from "./components/second_page/SecondPageComponent"
import ThirdPageComponent from "./components/third_page/ThirdPageComponent"
import FourthPageComponent from "./components/fourth_page/FourthPageComponent"
import FifthPageComponent from "./components/fifth_page/FifthPageComponent"
import LastPageComponent from "./components/last_page/LastPageComponent"

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory grid place-items-center h-screen w-screen bg-black overflow-scroll">
        <FirstPageComponent />
        <SecondPageComponent />
        <ThirdPageComponent />
        <FourthPageComponent />
        <FifthPageComponent />
        <LastPageComponent />
      </div>
    </>
  )
}

export default App
