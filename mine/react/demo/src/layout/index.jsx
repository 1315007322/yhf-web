import { Layout } from 'antd';
import Head from './header'
import './index.scss'

const {  Footer, Sider, Content } = Layout;
const BasicLayout = () => {
    
    return (
        <Layout className="container">
            <Head />
            {/* <Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer> */}
        </Layout>
    )
}

export default BasicLayout