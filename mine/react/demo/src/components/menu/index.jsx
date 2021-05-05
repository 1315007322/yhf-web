import { Menu } from 'antd';
// import './index.scss'

const Nav = () => {

    return (
            <Menu
                mode='horizontal'
            >
                <Menu.Item key="home">
                    首页
                </Menu.Item>
                <Menu.Item key="project">
                    项目
                </Menu.Item>
                <Menu.Item key="board">
                    留言
                </Menu.Item>
                <Menu.Item key="photos">
                    相册
                </Menu.Item>
                <Menu.Item key="pigeonhole">
                    归档
                </Menu.Item>
            </Menu>
    )
}

export default Nav