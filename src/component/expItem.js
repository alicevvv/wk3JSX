import {Row,Col} from 'antd';
import { Card } from "antd";
import { Link } from "react-router-dom";


export default function ExpItem({expitem}) {
    return (
      <Card className="bg-gray">
        <Link to={`./experienceInfo/${expitem.id}`}>
          <Row className="info">
            <Col span={20} offset={2}>
              <img className="p-2" src={expitem.img} width="100%"/>
            </Col>
          </Row>
        </Link>
      </Card>
    );
}

