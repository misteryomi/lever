// @flow

import * as React from "react";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper";

function Home() {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row>
          <Grid.Col md={6} lg={12}>
            <Grid.Row>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={5}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#467fcf"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#e74c3c"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#5eba00"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={9}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#f1c40f"],
                      }}
                    />
                  }
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>Dynamo Social by Lever - Incoming Applications</Card.Title>
              </Card.Header>
              <C3Chart
                style={{ height: "10rem" }}
                data={{
                  columns: [
                    // each columns data
                    [
                      "data1",
                      0,
                      5,
                      1,
                      2,
                      7,
                      5,
                      6,
                      8,
                      24,
                      7,
                      12,
                      5,
                      6,
                      3,
                      2,
                      2,
                      6,
                      30,
                      10,
                      10,
                      15,
                      14,
                      47,
                      65,
                      55,
                    ],
                  ],
                  type: "area", // default type of chart
                  groups: [["data1", "data2", "data3"]],
                  colors: {
                    data1: colors["blue"],
                  },
                  names: {
                    // name of each serie
                    data1: "Growth",
                  },
                }}
                axis={{
                  y: {
                    padding: {
                      bottom: 0,
                    },
                    show: false,
                    tick: {
                      outer: false,
                    },
                  },
                  x: {
                    padding: {
                      left: 0,
                      right: 0,
                    },
                    show: false,
                  },
                }}
                legend={{
                  position: "inset",
                  padding: 0,
                  inset: {
                    anchor: "top-left",
                    x: 20,
                    y: 8,
                    step: 10,
                  },
                }}
                tooltip={{
                  format: {
                    title: function(x) {
                      return "";
                    },
                  },
                }}
                padding={{
                  bottom: 0,
                  left: -1,
                  right: -1,
                }}
                point={{
                  show: false,
                }}
              />
              <Table
                cards={true}
                striped={true}
                responsive={true}
                className="table-vcenter"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader>Aggregator ID</Table.ColHeader>
                    <Table.ColHeader>Channel ID</Table.ColHeader>
                    <Table.ColHeader>Mandate Number</Table.ColHeader>
                    <Table.ColHeader>Date</Table.ColHeader>
                    <Table.ColHeader />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>
                        <a href="#" className="text-inherit">
                          4f441728-e2db-4156-8a43-ab0bc78d6b67
                        </a>
                    </Table.Col>
                    <Table.Col>1234</Table.Col>
                    <Table.Col>1234</Table.Col>
                    <Table.Col className="text-nowrap">May 6, 2018</Table.Col>
                    <Table.Col className="w-1">
                        <Button size="sm" color="secondary">
                          Manage
                        </Button>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                        <a href="#" className="text-inherit">
                          4f441728-e2db-4156-8a43-ab0bc78d6b67
                        </a>
                    
                    </Table.Col>
                    <Table.Col>1234</Table.Col>
                    <Table.Col>1234</Table.Col>
                    <Table.Col className="text-nowrap">May 6, 2018</Table.Col>
                    <Table.Col className="w-1">
                      <Button size="sm" color="secondary">
                        Manage
                      </Button>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <a href="#" className="text-inherit">
                          4f441728-e2db-4156-8a43-ab0bc78d6b67
                        </a>
                      </Table.Col>
                    <Table.Col>1234</Table.Col>
                    <Table.Col>1234</Table.Col>
                    <Table.Col className="text-nowrap">May 6, 2018</Table.Col>
                    <Table.Col className="w-1">
                        <Button size="sm" color="secondary">
                          Manage
                        </Button>
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>

          <Grid.Col width={12}>
            <Card title="Channels">
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "Channel ID", className: "w-1" },
                  { content: "Channel ID" },
                  { content: "Pay Point" },
                  { content: "Transaction Count" },
                  { content: "Actions",
                    alignContent: "right",
                  },
                ]}
                bodyItems={[
                  {
                    key: "1",
                    item: [
                      {
                        content: (
                          <Text RootComponent="span" muted>
                            1
                          </Text>
                        ),
                      },
                      {
                        content: (
                          <a href="#" className="text-inherit">
                            1234
                          </a>
                        ),
                      },
                      { content: "1234" },
                      { content: "1234" },
                      {
                        content: (
                          <React.Fragment>
                            <Button size="sm" color="secondary">
                              View
                            </Button>
                            <Button size="sm" color="secondary">
                              Edit
                            </Button>
                            <Button size="sm" color="secondary">
                              Delete
                            </Button>
                          </React.Fragment>
                        ),
                      },
                    ],
                  },
                ]}
              />
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
