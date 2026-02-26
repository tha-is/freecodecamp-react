import { useState } from "react";
import '../App.css'

function Exercise02 () {

const [bgColor, setBgColor] = useState('#ffffff')

// fórmula pronta para encontrar cores mais claras no rgb:
const isLightColor = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128;
}

const customFontColor = {
    color: isLightColor(bgColor) ? '#000' : '#fff'
}
    
    const handleChange = (event) => {
    setBgColor(event.target.value); // pegar o valor selecionado na ação
    console.log(bgColor);
}

    return (
        <div style={{ backgroundColor: bgColor, width: '300px', height: '300px', padding:'5px' }} value={bgColor}>
            <h6 style={customFontColor}>
                Selecione a cor no input abaixo para mudar o background do elemento</h6>
            <input type="color" value={bgColor} onChange={handleChange} 
            style={{width: '25%', height: '25%', cursor: 'pointer', backgroundColor: '#ffffff'}}/>
        </div>

    )
}

export default Exercise02