export interface ISaleModel {
  products: {
    productId: string;
    quantity: number;
  }[];
  number: number
  branchId: string;    
}
