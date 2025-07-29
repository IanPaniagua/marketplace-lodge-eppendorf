import { User } from 'firebase/auth';

export interface UserProfile extends User {
  displayName: string;
  email: string;
  photoURL: string | null;
  uid: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarketplaceContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
} 