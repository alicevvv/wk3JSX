import {Row,Col} from 'antd';
import { Link } from "react-router-dom";
import Navbar from './navbar.js'

export default function APPheader() {
    return (
        <Row justify="space-between">
            <Col span={4}>
                <Link to="/">
                    <img src="./image/alice2.jpg" className="myphoto" />
                </Link>
            </Col>
            <Col span={6}>
                <Navbar/>
            </Col>
        </Row>
    );
}

