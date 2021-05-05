import { Typography,Layout } from 'antd';
import Nav from '../../components/menu'
import './index.scss'

const {Header} = Layout
const { Title } = Typography;
const Head = () => {
    return (
        <Header>
             <div className="header_top">
                <Title level={1}>
                    Yan · blog
                </Title>
            </div>
            <Nav />
        </Header>
       
    )
}

export default Head