import {Row,Col} from 'antd';
import { Card } from "antd";
import {Link} from "react-router-dom";

export default function ExpInfo({expitem}) {
    return (
      <Card className="bg-gray">
          <Row className="info">
            <Col sm={{span:20}} lg={{span:13}}>
              <img className="p-2" src={expitem.img} width="100%"/>
            </Col>
            <Col sm={{span:20}} lg={{span:10}} offset={{span:1}}>
              <h2 className="card-title">
                  {expitem.title}
              </h2>
              <h3 className="card-title">
                  {expitem.exp}
              </h3>
              <p className="card-text">
                {expitem.description}</p>
            </Col>
          </Row>
      </Card>
    );
}

