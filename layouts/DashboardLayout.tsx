import { Layout, ConfigProvider } from 'antd';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: '#a2a2a2',
          colorText: '#fff',
          colorBgBase: '#060606',
        },
      }}
    >
      <Layout
        style={{
          width: '100%',
          height: '100vh',
        }}
      >
        <Sidebar />
        <Layout>
          <Layout.Content
            style={{
              padding: '1.5rem 3rem',
              maxWidth: '1100px',
              width: '100%',
              margin: '0 auto',
            }}
          >
            <Header />
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default DashboardLayout;
