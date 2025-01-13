import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ContentSection from './ContentSection';
import Footer from './Footer';
import DataManagement from './components/DataManagement';

const HomePage = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <ContentSection />
      <DataManagement />
      <Footer />
    </div>
  );
};

export default HomePage;