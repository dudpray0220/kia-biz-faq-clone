export type MainTab = '서비스 도입' | '서비스 이용';

export interface Category {
  categoryID: string;
  name: string;
}

export interface FaqItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}
