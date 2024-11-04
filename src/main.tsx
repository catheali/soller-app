import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/fonts/fonts.css'
import {Header} from './templates/Header/Header';
import {Footer} from './templates/Footer/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
	<Footer/>
  </StrictMode>,
)
