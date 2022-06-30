import Image from "next/image";

export default function Header() {
    return (
        <header >
            <div>
                <Image
                    src='/blacklogo_wine.svg'
                    alt="country flag"
                    width="100px"
                    height="28px"
                />
            </div>
            <div>
                <h6>Clube</h6>
                <h6>Loja</h6>
                <h6>Produtores</h6>
                <h6>Ofertas</h6>
                <h6>Eventos</h6>
            </div>
            <div>
                <span>lupa</span>
                <span>user</span>
                <span>carrinho</span>
            </div>
        </header>
    )
}
