import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {
  ConfigProvider,
  Typography,
  Tooltip,
  Button,
  Dropdown,
  message,
  Col,
  Row,
  Card,
  Space,
  Statistic,
} from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import RefreshIcon from '../components/Icons/Refresh.icon';
import ChevronDownIcon from '../components/Icons/ChevronDown.icon';
import ArrowLeftIcon from '../components/Icons/ArrowLeft.icon';
import ArrowRightIcon from '../components/Icons/ArrowRight.icon';
import ArrowRightUpIcon from '../components/Icons/ArrowRightUp.icon';

import styles from '../styles/Home.module.css';
import DashboardLayout from '../layouts/DashboardLayout';

const Home: NextPage = () => {
  const [filter, setFilter] = useState<number>(1);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    // console.log('click', e);
    setFilter(+e.key - 1);
  };

  const menuItems: MenuProps['items'] = [
    {
      label: 'Last 7 Days',
      key: '1',
    },
    {
      label: 'Last 30 Days',
      key: '2',
    },
    {
      label: 'Last 360 Days',
      key: '3',
    },
  ];

  const menuProps = {
    items: menuItems,
    onClick: handleMenuClick,
  };

  return (
    <DashboardLayout>
      <Space direction="vertical" size={24} style={{ display: 'flex' }}>
        <Row
          style={{
            display: 'flex',
            alignItems: 'flex-end',
          }}
          justify="space-between"
        >
          <Col span={12}>
            <section style={{ marginRight: '1rem' }}>
              <ConfigProvider
                theme={{
                  token: {
                    fontWeightStrong: 400,
                    colorText: '#E1E1E1',
                  },
                }}
              >
                <Typography.Title
                  level={1}
                  style={{
                    marginBottom: '0.6rem',
                  }}
                >
                  <span
                    style={{
                      color: '#A0A0A0',
                    }}
                  >
                    Hello{' '}
                  </span>
                  Jack Zerby!
                </Typography.Title>
              </ConfigProvider>

              <ConfigProvider
                theme={{
                  token: {
                    fontWeightStrong: 400,
                    colorText: '#A0A0A0',
                  },
                }}
              >
                <Typography.Text>Nod Financial Technologies</Typography.Text>
              </ConfigProvider>
            </section>
          </Col>

          <Col span={12}>
            <section
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <ConfigProvider
                theme={{
                  token: {
                    fontWeightStrong: 400,
                    fontSize: 12,
                    colorText: '#595959',
                  },
                }}
              >
                <Typography.Text>Last refreshed 2hrs ago</Typography.Text>
              </ConfigProvider>

              <ConfigProvider
                theme={{
                  token: {
                    borderRadiusLG: 10,
                    boxShadow: 'none',
                    colorPrimary: '#0C0C0C',
                    controlHeightLG: 40,
                    colorBorder: '#222222',
                  },
                }}
              >
                <Tooltip title="Refresh">
                  <Button
                    // type="primary"
                    size="large"
                    icon={<RefreshIcon />}
                    style={{
                      boxShadow: 'none',
                      marginRight: '1.5rem',
                      marginLeft: '1rem',
                      minWidth: '4px',
                    }}
                  />
                </Tooltip>
              </ConfigProvider>

              <ConfigProvider
                theme={{
                  token: {
                    borderRadiusLG: 10,
                    boxShadow: 'none',
                    colorPrimary: '#0C0C0C',
                    controlHeightLG: 40,
                    colorBorder: '#222222',
                  },
                }}
              >
                <Dropdown menu={menuProps}>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: 'none',
                      fontWeight: 300,
                      fontSize: 14,
                      color: '#A4A4A4',
                      fill: '#A4A4A4',
                    }}
                  >
                    {menuItems[filter]?.label}
                    <ChevronDownIcon />
                  </Button>
                </Dropdown>
              </ConfigProvider>
            </section>
          </Col>
        </Row>

        <Row gutter={22}>
          <ConfigProvider
            theme={{
              token: {
                colorBgBase: '#111111',
                colorText: '#F8F8F8',
              },
            }}
          >
            <Col span={14}>
              <Space
                direction="vertical"
                size="middle"
                style={{ display: 'flex' }}
              >
                <Card>
                  <Typography.Text>Graph component</Typography.Text>
                </Card>

                <Card>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Statistic
                        title={
                          <ConfigProvider
                            theme={{
                              token: {
                                colorText: '#A2A2A2',
                              },
                            }}
                          >
                            <Typography.Text>
                              <ArrowLeftIcon />
                              Money In
                            </Typography.Text>
                          </ConfigProvider>
                        }
                        value={'516, 789'}
                        prefix={<Typography.Text>PKR</Typography.Text>}
                        suffix={<Typography.Text>.00</Typography.Text>}
                      />
                      <ConfigProvider
                        theme={{
                          token: {
                            colorText: '#A2A2A2',
                            fontSize: 12,
                          },
                        }}
                      >
                        <Typography.Text>
                          <span
                            style={{
                              fontSize: 14,
                              color: '#FF5448',
                              backgroundColor: '#302220',
                              padding: '3px 8px',
                              borderRadius: 8,
                              lineHeight: '21px',
                              marginRight: 10,
                            }}
                          >
                            <ArrowRightUpIcon />
                            1.25%
                          </span>{' '}
                          {menuItems[filter]?.label}
                        </Typography.Text>
                      </ConfigProvider>
                    </Col>

                    <Col span={12}>
                      <Statistic
                        title={
                          <ConfigProvider
                            theme={{
                              token: {
                                colorText: '#A2A2A2',
                              },
                            }}
                          >
                            <Typography.Text>
                              <ArrowRightIcon />
                              Money Out
                            </Typography.Text>
                          </ConfigProvider>
                        }
                        value={'-312, 361'}
                        prefix={<Typography.Text>PKR</Typography.Text>}
                        suffix={<Typography.Text>.00</Typography.Text>}
                      />
                      <ConfigProvider
                        theme={{
                          token: {
                            colorText: '#A2A2A2',
                            fontSize: 12,
                          },
                        }}
                      >
                        <Typography.Text>
                          <span
                            style={{
                              fontSize: 14,
                              color: '#88FF9B',
                              backgroundColor: '#253028',
                              padding: '3px 8px',
                              borderRadius: 8,
                              lineHeight: '21px',
                              marginRight: 10,
                            }}
                          >
                            <ArrowRightUpIcon />
                            1.25%
                          </span>{' '}
                          {menuItems[filter]?.label}
                        </Typography.Text>
                      </ConfigProvider>
                    </Col>
                  </Row>
                </Card>
              </Space>
            </Col>

            <Col span={10}>
              <Card style={{ height: '100%' }}>
                <Typography.Title level={5}>Account Activity</Typography.Title>
              </Card>
            </Col>
          </ConfigProvider>
        </Row>

        <Row>
          <Col span={24}>
            <ConfigProvider
              theme={{
                token: {
                  colorBgBase: '#111111',
                  fontWeightStrong: 400,
                  colorText: '#E1E1E1',
                },
              }}
            >
              <Card>
                <Typography.Text>Money In / Out List</Typography.Text>
              </Card>
            </ConfigProvider>
          </Col>
        </Row>
      </Space>
    </DashboardLayout>
  );
};

export default Home;
