import { Layout } from 'antd';
import APPheader from '../component/header.js';
import experience from "../json/experience.json";
import ExpInfo from '../component/expInfo.js';

const { Header, Content, Footer } = Layout;

export default function ExpInfoCards({match}){
    const expid = experience.find(
        (x) => x.id === match.params.expId
     );
     console.log('in ExpInfoCards');
    return(
        <Layout>
            <Header>
                <APPheader/>
            </Header>
            <Content>
                <ExpInfo expitem={expid}></ExpInfo>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}