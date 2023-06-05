import { useState } from 'react';
import { ConfigProvider, Menu, Layout, Button, Card } from 'antd';
import type { MenuProps } from 'antd/es/menu';

import CompanyLogo from './CompanyLogo';
import CompanyIcon from './CompanyIcon';

import ExpandIcon from './Icons/Expand.icon';
import HomeIcon from './Icons/Home.icon';
import TransactionIcon from './Icons/Transaction.icon';
import PaymentsIcon from './Icons/Payments.icon';
import TeamIcon from './Icons/Team.icon';
import IntegrationsIcon from './Icons/Integrations.icon';
import PerksIcon from './Icons/Perks.icon';
import ApiIcon from './Icons/Api.icon';

type MenuItem = Required<MenuProps>['items'][number];

const sidebarNavItems: MenuItem[] = [
  {
    key: 1,
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    key: 2,
    label: 'Transaction',
    icon: <TransactionIcon />,
  },
  {
    key: 3,
    label: 'Payments',
    icon: <PaymentsIcon />,
    children: [],
  },
  {
    key: 4,
    label: 'Team',
    icon: <TeamIcon />,
  },
  {
    key: 5,
    label: 'Integrations',
    icon: <IntegrationsIcon />,
    children: [],
  },
];

const sidebarBottomNavItems: MenuItem[] = [
  {
    key: 1,
    label: 'Perks',
    icon: <PerksIcon />,
  },
  {
    key: 2,
    label: "Lunara's API",
    icon: <ApiIcon />,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: '#a2a2a2',
        },
      }}
    >
      <Layout.Sider
        trigger={null}
        style={{
          height: '100%',
          backgroundColor: 'transparent',
        }}
        width="244px"
        collapsedWidth="104px"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '2rem',
            backgroundColor: '#111111',
          }}
        >
          <section
            style={{
              marginBottom: '2.55rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {collapsed ? <CompanyIcon /> : <CompanyLogo />}

            <section
              style={{
                position: collapsed ? 'relative' : 'absolute',
                top: collapsed ? 20 : 6,
                right: collapsed ? '0px' : '-42px',
                paddingBottom: '1rem',
                borderBottom: collapsed
                  ? '1px solid rgba(248, 248, 248, 0.2)'
                  : 'none',
                marginBottom: '1.5rem',
                transition: 'all 180ms ease 50ms',
              }}
            >
              <Button
                icon={<ExpandIcon />}
                style={{
                  backgroundColor: '#1D1D1D',
                  border: 'none',
                }}
                onClick={() => setCollapsed(!collapsed)}
              />
            </section>
          </section>

          <section
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <ConfigProvider
              theme={{
                token: {
                  colorText: '#a2a2a2',
                  colorBgContainer: 'transparent',
                  controlItemBgActive: '#2A2A2A',
                  colorPrimary: '#F8F8F8',
                },
              }}
            >
              <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                items={sidebarNavItems}
              />
            </ConfigProvider>

            <section
              style={{
                marginTop: 'auto',
                marginBottom: '2rem',
              }}
            >
              <ConfigProvider
                theme={{
                  token: {
                    colorText: '#a2a2a2',
                    colorBgContainer: 'transparent',
                    controlItemBgActive: '#2A2A2A',
                    colorPrimary: '#F8F8F8',
                  },
                }}
              >
                <Menu mode="inline" items={sidebarBottomNavItems} />
              </ConfigProvider>
            </section>

            <ConfigProvider
              theme={{
                token: {
                  colorText: '#a2a2a2',
                  colorBgContainer: collapsed ? 'transparent ' : '#181818',
                  paddingLG: collapsed ? 4 : 8,
                  paddingXS: 8,
                  colorTextDescription: '#a2a2a2',
                  fontSize: 12,
                  marginXS: 0,
                },
              }}
            >
              <Card bordered={false}>
                {collapsed ? (
                  <Card.Meta
                    avatar={<img src="./Avatar.png" />}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  />
                ) : (
                  <Card.Meta
                    avatar={<img src="./Avatar.png" />}
                    title="Solace"
                    description="Salena James"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  />
                )}
              </Card>
            </ConfigProvider>
          </section>
        </section>
      </Layout.Sider>
    </ConfigProvider>
  );
};
export default Sidebar;
