import { Layout } from 'antd';
import APPheader from '../component/header.js';
import {Row,Col} from 'antd';
import experience from "../json/experience.json";
import ExpList from '../component/expList.js';

const { Header, Content, Footer } = Layout;

export default function Experience(){
    return(
        <Layout>
            <Header>
                <APPheader/>
            </Header>
            <Content>
                <ExpList exp={experience}></ExpList>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}