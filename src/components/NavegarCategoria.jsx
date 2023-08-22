import Style from "./navegarcategoria.module.css";
import imgcar1 from "./Banner-Tile-Desk-TTY-Inverno.avif"

function NavegarCategoria (props) {
    return(
        <div2 className={Style.navegarcategoria}>
            <h1 className={Style.navegueh1}>Navegue por categoria</h1>
            <img className={Style.imagemnavegar} src={imgcar1} alt="" />
        </div2>
    )
}
export default NavegarCategoria;