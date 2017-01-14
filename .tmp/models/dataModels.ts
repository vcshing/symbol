export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export interface Symbol {
  master_id: string;
  symbol: string;
  type: number;
  likecount: number;
  favoritecss: string;
  favoritecount:number;
  title:string;
}

export interface SymbolType {
  type: string;
  type_id: string;
}

export interface ReturnData {
  data: string;
}
