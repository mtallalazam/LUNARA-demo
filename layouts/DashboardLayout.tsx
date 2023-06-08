import { Layout, ConfigProvider, Space } from "antd";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorTextBase: "#a2a2a2",
					colorText: "#fff",
					colorBgBase: "#060606",
				},
			}}
		>
			<Layout
				style={{
					height: "100vh",
					overflow: "hidden",
				}}
			>
				<Sidebar />
				<Layout
					style={{
						overflowY: "auto",
					}}
				>
					<Layout
						style={{
							maxWidth: "1010px",
							width: "100%",
							margin: "0 auto",
						}}
					>
						<Space
							direction="vertical"
							size={24}
							style={{ display: "flex", padding: "1.5rem 0" }}
						>
							<Header />
							<Layout.Content>{children}</Layout.Content>
						</Space>
					</Layout>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
};

export default DashboardLayout;
