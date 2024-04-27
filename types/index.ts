import { type Ref } from "vue";
import { type ChartData } from "chart.js";

export type OrNull<T = any> = T | null;
export type OrNoValue<T = any> = OrNull<T> | undefined;
export type TStoreMain<T = any> = Record<string, T>;
export type TStoreFlags = Record<string, boolean>;
export type TDocData<T = any> = Record<string, T>;
export interface IDoc<T = TDocData> {
  id?: number | undefined;
  data: T;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
export interface IDocDataUsers {
  email: string;
  password: string;
}

// @types/auth

export type TAuthUser = OrNull<{ id: number; email: string }>;

export interface IAuthCreds {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token?: string | undefined;
}

export interface IAuthWhoResponse {
  id?: number | undefined;
  email?: string | undefined;
  company?: boolean | undefined;
  error?: string | undefined;
}

export interface IAuthLogoutResponse {}

export interface IStorageFileInfo {
  id: number;
  file_id: string;
  title: string;
  description: string;
  filename: string;
  path: string;
  size: number;
  mimetype: string;
  public: boolean;
  created_at: string;
  updated_at: string;
}

export interface IFilesUpload {
  [name: string]: {
    file?: OrNoValue<any>;
    data: {
      title?: string | undefined;
      description?: string | undefined;
    };
  };
}

export interface IStorageFileDataSaved {
  file_id: string;
  user_id: number;
  title: string;
  description: string;
  filename: string;
  path: string;
  size: number;
  mimetype: string;
  public: boolean;
}

export interface IStorageStatusFileSaved {
  id: number;
  data: IStorageFileDataSaved;
  created_at: string;
  updated_at: string;
}

export interface IConfigDocs {
  autoReload: boolean;
}

export interface IThemeToggle {
  theme: Ref<string>;
  themeToggle: (mode?: string | undefined) => void;
}

export interface IAuthData {
  id: number;
  email: string;
}

export type TChartDataBar<TData = Record<string, any>[]> = ChartData<
  "bar",
  TData
>;

export interface IDocDataChat {
  name: string;
  comment: string;
}

export interface IAppData<T = any> {
  [key: string]: T;
}

export type TVoid = () => void;

export interface IDocDataTask {
  title: string;
  completedAt: OrNull<Date>;
  href?: string | undefined;
  description?: string | undefined;
}

export interface ICompanyProfile {
  name?: string | undefined;
  slug?: string | undefined;
  pin?: string | undefined;
  address?: string | undefined;
  district?: string | undefined;
  phone?: string | undefined;
  delivery?: string | undefined;
  about?: string | undefined;
  googleCalendarEmbedLink?: string | undefined;
  googleCalendarEditPageLink?: string | undefined;
  ownerFirstName?: string | undefined;
  ownerLastName?: string | undefined;
}

export interface IUser {
  id: number;
  email: string;
  products?: OrNoValue<IProduct[]>;
  created_at: string;
  updated_at: string;
}

export interface IProduct {
  id: number;
  user_id: number;
  name: string;
  price?: OrNoValue<number>;
  stock?: OrNoValue<number>;
  stockType?: OrNoValue<string>;
  onSale?: OrNoValue<boolean>;
  description?: OrNoValue<string>;
  tags?: OrNoValue<string[]>;
  user?: OrNoValue<IUser>;
  created_at: string;
  updated_at: string;
}

export interface IProductData {
  name?: string | undefined;
  category?: string | undefined;
  price?: number | undefined;
  stock?: number | undefined;
  stockType?: string | undefined;
  onSale?: boolean | undefined;
  description?: string | undefined;
}

export interface IOrderReceived {
  id: number;
  user_id: number;
  code?: OrNoValue<string>;
  description?: OrNoValue<string>;
  completed?: OrNoValue<boolean>;
  canceled?: OrNoValue<boolean>;
  created_at: string;
  updated_at: string;
}

export interface IOrdersProducts {
  amount: number;
  id: number;
  user_id?: OrNoValue<number>;
  name: string;
  price?: OrNoValue<number>;
  stock?: OrNoValue<number>;
  stockType?: OrNoValue<string>;
  onSale?: OrNoValue<boolean>;
  description?: OrNoValue<string>;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export type TGravatars = Record<
  number,
  { src?: OrNoValue<string>; enabled?: OrNoValue<boolean> }
>;

export type TDataLikesDislikesStore = Record<string, number>;

export interface ITopicChatMessage {
  uid?: OrNoValue<number | string>;
  name?: OrNoValue<string>;
  message: string;
}

export interface IDataRating {
  [topic: string]: {
    [key: string]: number;
  };
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  user_id: number;
  user?: IAuthData;
  tags?: string[];
  docs?: Record<string, any>[];
  created_at: string;
  updated_at: string;
}

export interface IPostInputData {
  title?: string;
  content?: string;
}
