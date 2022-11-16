import styles from '@/pages/index.module.css';
import { Keypair } from '@solana/web3.js';

export default function Home() {

  Keypair.generate().publicKey.toString();

  return (
    <div>
      <h1 className={styles.title}>
        welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
}
