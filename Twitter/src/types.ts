export interface User {
  id: number;
  username: string;
  email?: string;
  is_admin: boolean;
}

export interface Comment {
  id: number;
  conteudo: string;
  autor?: { id: number; username: string };
  created_at?: string;
}

export interface Tweet {
  id: number;
  conteudo: string;
  imagem_url?: string | null;
  autor?: { id: number; username: string };
  likes?: Array<{ utilizador_id: number }>;
  comments?: Comment[];
  created_at?: string;
}

export interface DiscoverUser {
  id: number;
  username: string;
  email?: string;
  is_following: boolean;
}
