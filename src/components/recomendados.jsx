import Style from "./recomendados.module.css";
import img1 from "./Captura de tela 2023-08-22 141839.png"
import img2 from "./Captura de tela 2023-08-22 141853.png"
import img3 from "./Captura de tela 2023-08-22 142923.png"

function Recomendados (props) {
    return(
        <div3 className={Style.recomendados}>
            <h1 className={Style.recomendadoh1}>Recomendado para você</h1>
            <img className={Style.imagem1} src={img1} alt="" />
            <img className={Style.imagem2} src={img2} alt="" />
            <img className={Style.imagem3} src={img3} alt="" />
        </div3>
    )
}
export default Recomendados;