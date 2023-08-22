import Style from "./descricao.module.css";

function Descricao (props) {
    return(
        <div className={Style.descricao}>
            <h1 className={Style.titulodesc}>Lacoste Brasil</h1>
            <span className={Style.spandesc} >O Site da Lacoste Brasil oferece uma experiência elegante e moderna que reflete a essência da marca. Com um design clean e intuitivo, os visitantes podem explorar uma vasta gama de produtos icônicos, desde roupas até acessórios, todos caracterizados pelo emblemático crocodilo. Além disso, o site apresenta informações sobre as últimas coleções, promoções e novidades da marca, proporcionando aos clientes uma visão abrangente do mundo Lacoste. A Navegação fácil e as imagens de alta qualidade ajudam os usuários a obterem uma idéia clara dos produtos antes de realizar suas compras. Combinando estilo e funcionalidade, o site da Lacoste Brasil é um destino digital elegante para os amantes da moda e admiradores da marca.</span>
        </div>
    )
}
export default Descricao;