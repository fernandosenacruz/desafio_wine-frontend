import Image from "next/image";
import { StyledHeader, StyledLogo, StyledNav } from "../../styles/Header.styled";

export default function Header() {
    return (
        <StyledHeader >
            <StyledLogo style={{ flexGrow: "1"}}>
                <Image
                    src='/blacklogo_wine.svg'
                    alt="Lodo da empresa Wine"
                    width="100px"
                    height="28px"
                />
            </StyledLogo>
            <StyledNav style={{ flexGrow: "8"}}>
                <h6>Clube</h6>
                <h6>Loja</h6>
                <h6>Produtores</h6>
                <h6>Ofertas</h6>
                <h6>Eventos</h6>
            </StyledNav>
            <StyledLogo style={{ flexGrow: "3"}}>
                <span>lupa</span>
                <span>
                    <Image
                    src='/contalogo_user.svg'
                    alt="carrinho"
                    width="56px"
                    height="59px"
                    />
                </span>
                <button>
                    <Image
                    src='/wineboxcart.svg'
                    alt="carrinho"
                    width="56px"
                    height="56px"
                    />
                </button>
            </StyledLogo>
        </StyledHeader>
    )
}
