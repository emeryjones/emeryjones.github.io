import { FiArrowUp, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="copyright">
            © {new Date().getFullYear()} <span className="highlight-text">Emery Jones</span>. All rights reserved.
          </p>
        </div>

        <div className="footer-center">
          <p className="made-with">
            Made with <FiHeart className="heart-icon" /> and React
          </p>
        </div>

        <div className="footer-right">
          <button 
            onClick={scrollToTop} 
            className="scroll-top-btn" 
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
