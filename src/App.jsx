import MainForecast from './components/MainForecast'
import OtherForecast from './components/OtherForecast'
import PinnedSection from './components/PinnedSection'


import './styles/App.css'

function App() {


  return (
    <div id="body">
      <MainForecast></MainForecast>
      <OtherForecast></OtherForecast>
      <PinnedSection></PinnedSection>
      
    </div>
  )
}

export default App
