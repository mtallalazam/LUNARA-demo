import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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
	List,
	Progress,
	Segmented,
	Badge,
	Tag,
	Divider,
} from "antd";
import type { MenuProps } from "antd";

import RefreshIcon from "../components/Icons/Refresh.icon";
import ChevronDownIcon from "../components/Icons/ChevronDown.icon";
import ChevronRightIcon from "../components/Icons/ChevronRight.icon";
import ArrowLeftIcon from "../components/Icons/ArrowLeft.icon";
import ArrowRightIcon from "../components/Icons/ArrowRight.icon";
import ArrowRightUpIcon from "../components/Icons/ArrowRightUp.icon";
import ArrowLeftDownIcon from "../components/Icons/ArrowLeftDown.icon";
import PaperPlaneIcon from "../components/Icons/PaperPlane.icon";

import DashboardLayout from "../layouts/DashboardLayout";

const IconLookup = {
	Transfer: <ArrowRightIcon style={{ marginRight: "0.3rem" }} />,
	Received: <ArrowLeftIcon style={{ marginRight: "0.3rem" }} />,
	Wire: <PaperPlaneIcon style={{ marginRight: "0.3rem" }} />,
};

const accountActivityData = [
	{
		title: "Jameson Accounting",
		amount: 5000.24,
		status: "Pending",
		operationType: "Transfer",
		type: "Ops/Payroll",
		currency: "PKR",
	},
	{
		title: "Lily's Eatery",
		amount: 65400.5,
		operationType: "Transfer",
		type: "Savings **6785",
		currency: "PKR",
	},
	{
		title: "The Plant Organic Cafe",
		amount: 50233.01,
		operationType: "Received",
		type: "Credit account",
		currency: "PKR",
	},
	{
		title: "Monarch Books",
		amount: 10345.24,
		operationType: "Transfer",
		type: "Ops/Payroll",
		currency: "PKR",
	},
	{
		title: "Aliyah McMahon",
		amount: 12904.85,
		operationType: "Wire",
		type: "Checking",
		currency: "PKR",
	},
	{
		title: "Aliyah McMahon",
		amount: 53405.24,
		operationType: "Received",
		type: "Credit account",
		currency: "PKR",
	},
];

const data = [
	{
		title: "Jordi O'Donnell",
		progress: 2.3,
		amount: 91343.0,
	},
	{
		title: "Gusto (Payroll)",
		progress: 50.4,
		amount: 180394.32,
	},
	{
		title: "Other",
		progress: 30.2,
		amount: 10945.08,
	},
	{
		title: "Milgram Brokerage",
		progress: 10.8,
		amount: 50000.05,
	},
];

const Home: NextPage = () => {
	const [filter, setFilter] = useState<number>(1);
	const [size, setSize] = useState<"in" | "out">("in");

	const handleMenuClick: MenuProps["onClick"] = (e) => {
		message.info("Click on menu item.");
		// console.log('click', e);
		setFilter(+e.key - 1);
	};

	const menuItems: MenuProps["items"] = [
		{
			label: "Last 7 Days",
			key: "1",
		},
		{
			label: "Last 30 Days",
			key: "2",
		},
		{
			label: "Last 360 Days",
			key: "3",
		},
	];

	const menuProps = {
		items: menuItems,
		onClick: handleMenuClick,
	};

	return (
		<DashboardLayout>
			<Space
				direction="vertical"
				size={24}
				style={{ display: "flex" }}
			>
				<Row
					style={{
						display: "flex",
						alignItems: "flex-end",
					}}
					justify="space-between"
				>
					<Col span={12}>
						<section style={{ marginRight: "1rem" }}>
							<ConfigProvider
								theme={{
									token: {
										fontWeightStrong: 400,
										colorText: "#E1E1E1",
									},
								}}
							>
								<Typography.Title
									level={1}
									style={{
										marginBottom: "0.6rem",
									}}
								>
									<span
										style={{
											color: "#A0A0A0",
										}}
									>
										Hello{" "}
									</span>
									Jack Zerby!
								</Typography.Title>
							</ConfigProvider>

							<ConfigProvider
								theme={{
									token: {
										fontWeightStrong: 400,
										colorText: "#A0A0A0",
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
								marginLeft: "auto",
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
							}}
						>
							<ConfigProvider
								theme={{
									token: {
										fontWeightStrong: 400,
										fontSize: 12,
										colorText: "#595959",
									},
								}}
							>
								<Typography.Text>Last refreshed 2hrs ago</Typography.Text>
							</ConfigProvider>

							<ConfigProvider
								theme={{
									token: {
										borderRadiusLG: 10,
										boxShadow: "none",
										colorPrimary: "#0C0C0C",
										controlHeightLG: 40,
										colorBorder: "#222222",
									},
								}}
							>
								<Tooltip title="Refresh">
									<Button
										// type="primary"
										size="large"
										icon={<RefreshIcon />}
										style={{
											boxShadow: "none",
											marginRight: "1.5rem",
											marginLeft: "1rem",
											minWidth: "4px",
										}}
									/>
								</Tooltip>
							</ConfigProvider>

							<ConfigProvider
								theme={{
									token: {
										borderRadiusLG: 10,
										boxShadow: "none",
										colorPrimary: "#0C0C0C",
										controlHeightLG: 40,
										colorBorder: "#222222",
									},
								}}
							>
								<Dropdown menu={menuProps}>
									<Button
										type="primary"
										size="large"
										style={{
											display: "flex",
											alignItems: "center",
											boxShadow: "none",
											fontWeight: 300,
											fontSize: 14,
											color: "#A4A4A4",
											fill: "#A4A4A4",
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
								colorBgBase: "#111111",
								colorText: "#F8F8F8",
							},
						}}
					>
						<Col span={15}>
							<Space
								direction="vertical"
								size="middle"
								style={{ display: "flex" }}
							>
								<Card>
									<Typography.Text>Line Chart component</Typography.Text>
								</Card>

								<Card>
									<section style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
										<section>
											<Space
												direction="vertical"
												size={16}
											>
												<ConfigProvider
													theme={{
														token: {
															colorText: "#A2A2A2",
															fontSize: 16,
														},
													}}
												>
													<Typography.Text style={{ display: "flex", alignItems: "center" }}>
														<ArrowLeftIcon style={{ marginRight: "0.6rem" }} />
														Money In
													</Typography.Text>
												</ConfigProvider>

												<h3 style={{ display: "flex", alignItems: "center", color: "#F8F8F8", fontWeight: 400 }}>
													<sup style={{ fontSize: 14 }}>PKR</sup>
													<span style={{ fontSize: "2.3rem", margin: "0 3px" }}>{516789}</span>
													<sup style={{ fontSize: 14 }}>.00</sup>
												</h3>

												<ConfigProvider
													theme={{
														token: {
															colorText: "#A2A2A2",
															fontSize: 12,
														},
													}}
												>
													<Typography.Text>
														<span
															style={{
																fontSize: 14,
																color: "#FF5448",
																backgroundColor: "#302220",
																padding: "3px 8px",
																borderRadius: 8,
																lineHeight: "21px",
																marginRight: 10,
															}}
														>
															<ArrowLeftDownIcon />
															1.25%
														</span>
														{menuItems[filter]?.label}
													</Typography.Text>
												</ConfigProvider>
											</Space>
										</section>

										<ConfigProvider
											theme={{
												token: {
													colorSplit: "#252525",
													fontSize: 38,
												},
											}}
										>
											<Divider type="vertical" />
										</ConfigProvider>

										<section>
											<Space
												direction="vertical"
												size={16}
											>
												<ConfigProvider
													theme={{
														token: {
															colorText: "#A2A2A2",
															fontSize: 16,
														},
													}}
												>
													<Typography.Text style={{ display: "flex", alignItems: "center" }}>
														<ArrowRightIcon style={{ marginRight: "0.6rem" }} />
														Money Out
													</Typography.Text>
												</ConfigProvider>

												<h3 style={{ display: "flex", alignItems: "center", color: "#F8F8F8", fontWeight: 400 }}>
													<sup style={{ fontSize: 14 }}>PKR</sup>
													<span style={{ fontSize: "2.3rem", margin: "0 3px" }}>{-312361}</span>
													<sup style={{ fontSize: 14 }}>.00</sup>
												</h3>

												<ConfigProvider
													theme={{
														token: {
															colorText: "#A2A2A2",
															fontSize: 12,
														},
													}}
												>
													<Typography.Text>
														<span
															style={{
																fontSize: 14,
																color: "#88FF9B",
																backgroundColor: "#253028",
																padding: "3px 8px",
																borderRadius: 8,
																lineHeight: "21px",
																marginRight: 10,
															}}
														>
															<ArrowRightUpIcon />
															2.30%
														</span>
														{menuItems[filter]?.label}
													</Typography.Text>
												</ConfigProvider>
											</Space>
										</section>
									</section>
								</Card>
							</Space>
						</Col>

						<Col span={9}>
							<Card style={{ height: "100%" }}>
								<Typography.Title
									level={4}
									style={{
										marginBottom: 3,
									}}
								>
									Account Activity
								</Typography.Title>

								<Space
									direction="vertical"
									size={20}
									style={{ display: "flex", justifyContent: "center" }}
								>
									<ConfigProvider
										theme={{
											token: {
												colorText: "#A2A2A2",
											},
										}}
									>
										<Typography.Text>Here are your company's most recent transactions</Typography.Text>
									</ConfigProvider>

									<ConfigProvider
										theme={{
											token: {
												colorSplit: "#252525",
											},
										}}
									>
										<List
											itemLayout="horizontal"
											dataSource={accountActivityData}
											renderItem={(item, index) => (
												<List.Item style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
													<List.Item.Meta
														title={item.title}
														description={
															<div
																style={{
																	display: "flex",
																	alignItems: "center",
																}}
															>
																{IconLookup[item.operationType]} {`${item.operationType} - ${item.type}`}
															</div>
														}
													/>
													<section
														style={{
															display: "flex",
															flexDirection: "column",
															justifyContent: "flex-end",
														}}
													>
														<ConfigProvider
															theme={{
																token: {
																	fontSize: 18,
																	colorText: item.operationType === "Received" ? "#88FF9B" : "#F8F8F8",
																},
															}}
														>
															<Typography.Text>
																<sup
																	style={{
																		top: "-5px",
																		fontSize: "10px",
																		marginRight: "2px",
																	}}
																>
																	{item.currency}
																</sup>
																{item.amount}
															</Typography.Text>
														</ConfigProvider>
														{item.status && (
															<ConfigProvider
																theme={{
																	token: {
																		colorBorder: "none",
																		colorFillQuaternary: "#2A2A2A",
																	},
																}}
															>
																<Tag
																	style={{
																		padding: "1px 8px 3px",
																		marginInlineEnd: 0,
																		display: "flex",
																		alignItems: "center",
																		justifyContent: "center",
																	}}
																>
																	<Badge
																		dot
																		color="yellow"
																		style={{
																			marginRight: "0.5rem",
																		}}
																		offset={[0, -2]}
																	/>
																	{item.status}
																</Tag>
															</ConfigProvider>
														)}
													</section>

													<ConfigProvider
														theme={{
															token: {
																colorBgBase: "#111111",
																fontWeightStrong: 400,
																colorText: "#E1E1E1",
																colorBorder: "none",
																controlHeight: 16,
															},
														}}
													>
														<Button
															style={{
																boxShadow: "none",
																backgroundColor: "#303030",
																display: "flex",
																alignItems: "center",
																justifyContent: "center",
																marginLeft: "1rem",
															}}
															shape="circle"
															icon={
																<ChevronRightIcon
																	width={7}
																	height={8}
																/>
															}
														/>
													</ConfigProvider>
												</List.Item>
											)}
										/>
									</ConfigProvider>

									<section
										style={{
											display: "flex",
											alignItems: "center",
											width: "100%",
											justifyContent: "center",
										}}
									>
										<a
											href="#"
											style={{ display: "flex", alignItems: "center" }}
										>
											<Typography.Text
												style={{
													fontWeight: 700,
													display: "flex",
													alignItems: "center",
												}}
											>
												View All
												<ChevronRightIcon
													width={9}
													height={10}
													style={{ marginLeft: "0.5rem" }}
												/>
											</Typography.Text>
										</a>
									</section>
								</Space>
							</Card>
						</Col>
					</ConfigProvider>
				</Row>

				<Row>
					<Col span={24}>
						<ConfigProvider
							theme={{
								token: {
									colorBgBase: "#111111",
									fontWeightStrong: 400,
									colorText: "#E1E1E1",
								},
							}}
						>
							<Card>
								<Space
									direction="vertical"
									size={24}
									style={{ display: "flex", justifyContent: "center" }}
								>
									<section
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<ConfigProvider
											theme={{
												token: {
													colorBgLayout: "#0C0C0C",
													colorText: "#E1E1E1",
													colorBgElevated: "#2A2A2A",
													fontSize: 14,
												},
											}}
										>
											<Segmented
												style={{
													minWidth: 280,
													padding: "4px",
													border: "1px solid #222222",
													fontWeight: 600,
												}}
												block
												options={[
													{
														label: (
															<Typography.Text
																style={{
																	display: "inline-flex",
																	justifyContent: "center",
																	alignItems: "center",
																}}
															>
																<ArrowLeftIcon style={{ marginRight: "0.4rem" }} />
																Money In
															</Typography.Text>
														),
														value: "in",
													},
													{
														label: (
															<Typography.Text
																style={{
																	display: "inline-flex",
																	justifyContent: "center",
																	alignItems: "center",
																}}
															>
																<ArrowRightIcon style={{ marginRight: "0.4rem" }} />
																Money Out
															</Typography.Text>
														),
														value: "out",
													},
												]}
												value={size}
												size="large"
												onChange={setSize}
											/>
										</ConfigProvider>

										<ConfigProvider
											theme={{
												token: {
													colorText: "#717171",
													fontSize: 12,
												},
											}}
										>
											<Typography.Text>{menuItems[filter]?.label}</Typography.Text>
										</ConfigProvider>
									</section>

									<section>
										<ConfigProvider
											theme={{
												token: {
													colorSplit: "#252525",
												},
											}}
										>
											<List
												itemLayout="horizontal"
												dataSource={data}
												renderItem={(item, index) => (
													<List.Item>
														<Row style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
															<Col span={4}>
																<Badge
																	dot={true}
																	color="blue"
																	style={{
																		marginRight: "1rem",
																	}}
																/>
																{item.title}
															</Col>
															<Col
																span={12}
																style={{ display: "flex", alignItems: "center" }}
															>
																<ConfigProvider
																	theme={{
																		token: {
																			fontSize: 14,
																			colorText: "#717171",
																		},
																	}}
																>
																	<Typography.Text>{item.progress}%</Typography.Text>
																</ConfigProvider>
																<ConfigProvider
																	theme={{
																		token: {
																			colorInfo: "#0960DB",
																		},
																	}}
																>
																	<Progress
																		style={{ width: "90%", padding: "0 2rem" }}
																		percent={item.progress}
																		showInfo={false}
																	/>
																</ConfigProvider>
															</Col>
															<Col
																span={4}
																style={{ display: "flex", justifyContent: "flex-end" }}
															>
																<ConfigProvider
																	theme={{
																		token: {
																			fontSize: 18,
																		},
																	}}
																>
																	<Typography.Text>
																		<sup
																			style={{
																				top: "-5px",
																				fontSize: "10px",
																				marginRight: "2px",
																			}}
																		>
																			PKR
																		</sup>
																		{item.amount}
																	</Typography.Text>
																</ConfigProvider>
																<ConfigProvider
																	theme={{
																		token: {
																			colorBgBase: "#111111",
																			fontWeightStrong: 400,
																			colorText: "#E1E1E1",
																			colorBorder: "none",
																			controlHeight: 20,
																		},
																	}}
																>
																	<Button
																		style={{
																			boxShadow: "none",
																			backgroundColor: "#303030",
																			display: "flex",
																			alignItems: "center",
																			justifyContent: "center",
																			marginLeft: "1rem",
																		}}
																		shape="circle"
																		icon={
																			<ChevronRightIcon
																				width={9}
																				height={10}
																			/>
																		}
																	/>
																</ConfigProvider>
															</Col>
														</Row>
													</List.Item>
												)}
											/>
										</ConfigProvider>
									</section>

									<section
										style={{
											display: "flex",
											alignItems: "center",
											width: "100%",
											justifyContent: "center",
										}}
									>
										<a
											href="#"
											style={{ display: "flex", alignItems: "center" }}
										>
											<Typography.Text
												style={{
													fontWeight: 700,
													display: "flex",
													alignItems: "center",
												}}
											>
												View All
												<ChevronRightIcon
													width={9}
													height={10}
													style={{ marginLeft: "0.5rem" }}
												/>
											</Typography.Text>
										</a>
									</section>
								</Space>
							</Card>
						</ConfigProvider>
					</Col>
				</Row>
			</Space>
		</DashboardLayout>
	);
};

export default Home;
