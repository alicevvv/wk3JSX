import './css/bootstrap.min.css';
import './css/main.css';

function App() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="content">
            <div className="all d-flex flex-column align-items-center">
                <div className="left d-flex align-items-center flex-column">
                    <img src="./image/alice2.jpg" className="myphoto" />
                    <div className="title">Hi, I'm Alice Lai！</div>
                    <div className="intro">I want to be a front-end Engineer！<br /></div>
                </div>
                <div className="right d-flex align-items-center flex-column">
                    <div className="row justify-content-center">
                        <button className="btns p-1 pr-3 pl-3 m-1 rounded email" onclick="location.href='./html/experience.html'">經歷</button>
                        <button className="btns p-1 pr-3 pl-3 m-1 rounded email" onclick="location.href='./html/work.html '">作品</button>
                        <button className="btns p-1 pr-3 pl-3 m-1 rounded email" onclick="location.href='mailto:alicev871203@gmail.com'">聯絡我</button>
                    </div>
                </div>
                <div className="middle">
                    <img className="intropic" src="./image/intro_1.png" width="100%" />
                    <img className="intropic" src="./image/intro_2.png" width="100%" />
                    <img className="intropic" src="./image/intro_3.png" width="100%" />
                </div>

            </div>

        </div>
    </div>
    </div>
  );
}

export default App;
