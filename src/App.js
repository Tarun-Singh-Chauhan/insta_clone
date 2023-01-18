import Navigation from "./components/ui/navigation/Navigation";
import styles from './App.module.css' ;
import Cards from "./components/ui/cards/Cards";
import Sidebar from "./components/ui/sidebar-container/Sidebar";

const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Navigation />

        <main>
          <div className={styles.container}>
            <Cards />

            <Sidebar />
          </div>
        </main>
      </div>
    </>
  );
};
export default App;
