import { Layout } from 'antd';
import APPheader from '../component/header.js';
import Skill from '../component/skill.js';
import {Row,Col} from 'antd';
const { Header, Content, Footer } = Layout;

export default function home(){
    return(
        <Layout>
            <Header>
                <APPheader/>
            </Header>
            <Content>
                <Row justify="center" align="middle" className="contentHeight">
                    <Skill/>
                </Row>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}