import Style from "./header.module.css";
import Img from "./logo-lacoste-1536.png";
import Heart from "./coracao.png"
import Cart from "./carrinho-de-compras.png"
import User from "./do-utilizador.png"

function Header (props) {
    return(
        <article className={Style.header}>
            <img className={Style.lacoste} src={Img}/>
            <h1 className={Style.textoheader}>OFERTA ESPECIAL: 5% OFF em pagamentos via PIX.</h1>
            <img className={Style.iconheart} src={Heart}></img>
            <img className={Style.iconcart} src={Cart}></img>
            <img className={Style.iconuser} src={User}></img>
        </article>
    )
}
export default Header;