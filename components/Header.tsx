import {
  ConfigProvider,
  Typography,
  Input,
  Button,
  Dropdown,
  message,
  Tooltip,
} from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import SearchIcon from './Icons/Search.icon';
import MoveMoneyIcon from './Icons/MoveMoney.icon';
import StarsLightSparkleIcon from './Icons/StarsLightSparkle.icon';
import ChevronDownIcon from './Icons/ChevronDown.icon';

const Header = () => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <header
      style={{
        display: 'flex',
        marginBottom: '3rem',
      }}
    >
      <SearchIcon
        style={{
          marginRight: '1rem',
          marginLeft: '-5px',
        }}
      />

      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: 'transparent',
            colorTextPlaceholder: '#595959',
            colorPrimaryHover: '#2A2A2A',
            controlOutline: 'transparent',
            borderRadius: 0,
          },
        }}
      >
        <Input
          prefix=" "
          size="large"
          placeholder="Search for transaction, payment, payees..."
          style={{
            maxWidth: '460px',
            marginRight: '1rem',
            borderRight: 0,
            borderTop: 0,
            borderLeft: 0,
          }}
        />
      </ConfigProvider>

      <ConfigProvider
        theme={{
          token: {
            borderRadiusLG: 6,
            boxShadow: 'none',
            colorPrimary: '#181818',
            controlHeightLG: 48,
          },
        }}
      >
        <Tooltip title="Notifications">
          <Button
            type="primary"
            size="large"
            icon={<StarsLightSparkleIcon />}
            style={{
              boxShadow: 'none',
              marginRight: '1.5rem',
              marginLeft: 'auto',
              minWidth: '4px',
            }}
          />
        </Tooltip>
      </ConfigProvider>

      <ConfigProvider
        theme={{
          token: {
            borderRadiusLG: 6,
            boxShadow: 'none',
            colorPrimary: '#0960DB',
            controlHeightLG: 48,
          },
        }}
      >
        <Dropdown menu={menuProps}>
          <Button
            type="primary"
            size="large"
            icon={<MoveMoneyIcon />}
            style={{
              display: 'flex',
              alignItems: 'center',
              boxShadow: 'none',
              fontWeight: 500,
            }}
          >
            Move Money
            <ChevronDownIcon />
          </Button>
        </Dropdown>
      </ConfigProvider>
    </header>
  );
};

export default Header;
