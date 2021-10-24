import {Row,Col} from 'antd';
import ExpItem from './expItem.js';


export default function ExpList({exp}) {
    return (
        <div>
        {exp.map(expitem => (
        <Row gutter={[32, 32]} justify="center">
                <Col 
                sm={{ span: 20 }} 
                lg={{ span: 16 }}>
                <ExpItem expitem={expitem}/>
                </Col>
        </Row>
        ))}
        </div>
    );
}

