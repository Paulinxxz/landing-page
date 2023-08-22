import Style from "./footer.module.css";
import ImgInstagram from "./instagram.png";
import ImgTwitter from "./twitter.png";
import ImgFacebook from "./facebook.png";
import ImgTelefone from "./chamada-telefonica.png";

function Footer (props) {
    return(
        <section className={Style.footer}>
            <img className={Style.instagram} src={ImgInstagram}/>
            <h1 className={Style.redes}>@Lacoste</h1>
            <img className={Style.twitter} src={ImgTwitter}></img>
            <h1 className={Style.redes2}>@Lacoste</h1>
            <img className={Style.facebook} src={ImgFacebook}></img>
            <h1 className={Style.redes3}>@LacosteBrazil</h1>
            <img className={Style.telefone} src={ImgTelefone}></img>
            <h1 className={Style.redes4}>(14) 98151-2912</h1>
        </section>  
    )
}
export default Footer;