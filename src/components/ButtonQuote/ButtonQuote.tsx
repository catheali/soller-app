import stylesButton from "./buttonquote.module.css";
import { useState } from 'react';

interface ColorProps {
	color: string
}

export function ButtonQuote(props : ColorProps){
	const [hovered, setHovered] = useState(false);

	const handleColorChange = (isHovered: boolean) => {
	  setHovered(isHovered);
	};
  
	return(
		<>
		<button 
			style = {{
				backgroundColor: hovered ? '#333' : props.color, // Se estiver no hover, a cor de fundo é lightgray, caso contrário, usa a cor passada
				color: hovered ? props.color : 'white',
			}}
			className={
				stylesButton.buttonQuote
				} 
			onMouseEnter={() => handleColorChange(true)} // Quando o mouse entra no botão
			onMouseLeave={() => handleColorChange(false)} 	
		>
			<span>
				Request a quote
			</span>
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.586 5.65701L6.636 1.70701C6.45384 1.51841 6.35305 1.26581 6.35533 1.00361C6.3576 0.741413 6.46277 0.4906 6.64818 0.305192C6.83359 0.119784 7.0844 0.0146148 7.3466 0.0123364C7.6088 0.010058 7.8614 0.110852 8.05 0.293011L13.707 5.95001C13.8002 6.04266 13.8741 6.15283 13.9246 6.27416C13.9751 6.39549 14.001 6.5256 14.001 6.65701C14.001 6.78842 13.9751 6.91853 13.9246 7.03987C13.8741 7.1612 13.8002 7.27136 13.707 7.36401L8.05 13.021C7.95775 13.1165 7.84741 13.1927 7.7254 13.2451C7.6034 13.2975 7.47218 13.3251 7.3394 13.3263C7.20662 13.3274 7.07494 13.3021 6.95205 13.2518C6.82915 13.2016 6.7175 13.1273 6.62361 13.0334C6.52971 12.9395 6.45546 12.8279 6.40518 12.705C6.3549 12.5821 6.3296 12.4504 6.33075 12.3176C6.3319 12.1848 6.35949 12.0536 6.4119 11.9316C6.46431 11.8096 6.54049 11.6993 6.636 11.607L10.586 7.65701H1C0.734784 7.65701 0.48043 7.55165 0.292893 7.36412C0.105357 7.17658 0 6.92223 0 6.65701C0 6.3918 0.105357 6.13744 0.292893 5.9499C0.48043 5.76237 0.734784 5.65701 1 5.65701H10.586Z" 
				fill={props.color}/>
			</svg>
		</button>



		</>
	)
}