
import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import Header from '@/components/header/header';
import SlideMenu from "@/components/SlideMenu/slideMenu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <SlideMenu/>
      <Dashboard/>
    </main>
  );
}
