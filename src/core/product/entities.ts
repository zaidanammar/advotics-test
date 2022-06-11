export interface IProduct {
  id: number;
  product_name: string;
  price: number;
  created_at: string;
  product_sold: number;
}

export interface IDate {
  startDate: Date;
  endDate: Date;
  key: string;
}
