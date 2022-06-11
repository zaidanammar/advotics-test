import { IDate, IProduct } from "./entities";

export class ProductService {
  public static getTopProducts(products: IProduct[]): IProduct[] {
    const topProducts = products
      .sort((a, b) => b.product_sold - a.product_sold)
      .slice(0, 10);

    return topProducts;
  }

  getFilteredProducts(products: IProduct[], date: IDate[]): IProduct[] {
    const filteredProducts = products.filter((product) => {
      let productDate = new Date(product.created_at);
      return (
        productDate >= new Date(date[0].startDate) &&
        productDate <= new Date(date[0].endDate)
      );
    });
    return filteredProducts;
  }
}
