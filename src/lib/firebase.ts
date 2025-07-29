import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Verificar si estamos en el entorno de construcción sin claves válidas
const isValidConfig = firebaseConfig.apiKey && 
                     firebaseConfig.apiKey !== 'dev' && 
                     firebaseConfig.projectId !== 'dev-project';

// Inicializar Firebase solo si tenemos una configuración válida
let app: FirebaseApp | null;
let auth: Auth | null;
let db: Firestore | null;
let googleProvider: GoogleAuthProvider | null;

if (isValidConfig) {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
  googleProvider = new GoogleAuthProvider();
  
  // Configurar el proveedor de Google
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
} else {
  // Crear objetos mock para desarrollo/build
  app = null;
  auth = null;
  db = null;
  googleProvider = null;
}

export { auth, db, googleProvider };
export default app; 