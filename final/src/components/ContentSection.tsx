import { useRef } from 'react';

const ContentSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5'];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const changeHeadingColor = () => {
    if (headingRef.current) {
      headingRef.current.style.color = getRandomColor();
    }
  };

  const changeParagraphColor = () => {
    if (paragraphRef.current) {
      paragraphRef.current.style.color = getRandomColor();
    }
  };

  const changeListColor = () => {
    if (listRef.current) {
      listRef.current.style.color = getRandomColor();
    }
  };

  const changeAllColors = () => {
    changeHeadingColor();
    changeParagraphColor();
    changeListColor();
  };

  return (
    <div className="container flex-grow-1 py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-5">
              <h1 
                ref={headingRef} 
                className="display-4 fw-bold mb-4"
                style={{ transition: 'color 0.3s ease' }}
              >
                Welcome to Color Changing Demo
              </h1>

              <p 
                ref={paragraphRef} 
                className="lead mb-4"
                style={{ transition: 'color 0.3s ease' }}
              >
                This is a demonstration of using useRef in React to manipulate DOM elements directly.
                Each section of text can have its color changed independently using the buttons below.
              </p>

              <ul 
                ref={listRef} 
                className="list-group list-group-flush mb-4"
                style={{ transition: 'color 0.3s ease' }}
              >
                <li className="list-group-item bg-transparent">Click buttons to change colors</li>
                <li className="list-group-item bg-transparent">Each text section can be changed independently</li>
                <li className="list-group-item bg-transparent">Colors are randomly selected from a predefined palette</li>
                <li className="list-group-item bg-transparent">Smooth color transitions using CSS</li>
              </ul>

              <div className="d-grid gap-2 d-md-flex">
                <button 
                  onClick={changeHeadingColor} 
                  className="btn btn-outline-primary"
                >
                  Change Heading Color
                </button>
                <button 
                  onClick={changeParagraphColor} 
                  className="btn btn-outline-primary"
                >
                  Change Paragraph Color
                </button>
                <button 
                  onClick={changeListColor} 
                  className="btn btn-outline-primary"
                >
                  Change List Color
                </button>
                <button 
                  onClick={changeAllColors} 
                  className="btn btn-primary"
                >
                  Change All Colors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;