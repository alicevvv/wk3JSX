import { NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="nav-bar">
            <NavLink to="/Experience" className="nav-item btns mr-3" activeClassName="nav-item--active">
                Experience
            </NavLink>
            <NavLink to="/" className="nav-item btns" activeClassName="nav-item--active">
                Works
            </NavLink>
        {/* <Row justify="space-between">
            <Col span={4}>
                <Link to="/">
                    <img src="./image/alice2.jpg" className="myphoto" />
                </Link>
            </Col>
            <Col span={4}>
                <button></button>
            </Col>
            <Col span={4}>
                <button></button>
            </Col>
        </Row> */}
        </div>
    );
}

