import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import {
  StyledHeader,
  StyledLogo,
  StyledNav,
} from '../../styles/Header.styled';
import { ProductsContext } from '../context/context';
import getParsedCart from '../helpers/getParsedCart';

export default function Header() {
  const { storage, setStorage } = useContext(ProductsContext);

  useEffect(() => {
    const cart = getParsedCart();

    cart && setStorage(cart.length);
  }, [storage, setStorage]);

  return (
    <StyledHeader>
      <StyledLogo style={{ flexGrow: '1' }}>
        <Image
          src="/blacklogo_wine.svg"
          alt="Lodo da empresa Wine"
          width="100px"
          height="28px"
        />
      </StyledLogo>
      <StyledNav style={{ flexGrow: '8' }}>
        <h6>Clube</h6>
        <h6>Loja</h6>
        <h6>Produtores</h6>
        <h6>Ofertas</h6>
        <h6>Eventos</h6>
      </StyledNav>
      <StyledLogo style={{ flexGrow: '3' }}>
        <span>lupa</span>
        <span>
          <Image
            src="/contalogo_user.svg"
            alt="carrinho"
            width="56px"
            height="59px"
          />
        </span>
        <div>
          <Image
            src="/wineboxcart.svg"
            alt="carrinho"
            width="56px"
            height="56px"
          />
          {storage && <span>{storage}</span>}
        </div>
      </StyledLogo>
    </StyledHeader>
  );
}
