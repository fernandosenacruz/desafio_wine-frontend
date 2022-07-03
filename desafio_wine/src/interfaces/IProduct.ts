export interface IProduct {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  size: string;
  sommelierComment: string;
  type: string;
}

export interface IProductProps {
  product: IProduct;
}

export interface IProducts {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: IProduct[];
}
