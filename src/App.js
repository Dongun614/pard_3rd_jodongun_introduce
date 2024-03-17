import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="whole-page">
        <div className="side-side">
          <div className="side-header">
            <button className="side-header-button">
              - 
            </button>
            Clock
            <div>
              <button type="button" className="side-header-button">
                위
              </button>
              <button className="side-header-button">
                아래
              </button>
            </div>
          </div>
          <div className="side-name">
            Settings
          </div>
          <div className="side-img">
          </div>
        </div>


        <div className="main-side">
          <div className="main-header">
            Program Manager
            <div>
                <button type="button" className="side-header-button">
                  위
                </button>
                <button className="side-header-button">
                  아래
                </button>
              </div>
          </div>
          <div className="main-name">
            Pard_3rd_Web
          </div>
          <div className="content"></div>
        </div>
      </div>

      <div className="footer">
      </div>
    </div>
  );
}

export default App;
