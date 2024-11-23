import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/fonts/fonts.css'
import {Header} from './templates/Header/Header';
import {Footer} from './templates/Footer/Footer';
import {ButtonQuote} from './components/ButtonQuote/ButtonQuote';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
	<ButtonQuote color='#581C87'/>
	<Footer/>
  </StrictMode>,
)
