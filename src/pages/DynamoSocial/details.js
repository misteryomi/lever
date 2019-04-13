import React from "react";

import SiteWrapper from "../../SiteWrapper";
import { Formik } from "formik";
import { Form, Grid, Page, Card, Button, Table, StoreCard, Badge, Text } from 'tabler-react';

function ApplicationDetails() {
  return  <SiteWrapper>
  <Page.Content title="Application Details">
    <Grid.Row>
      <Grid.Col lg={3}>
            <Card>
            <Card.Body>
                <h4>Channel ID: 1234</h4>
                <p>Paypoint: 1234</p>
                <p>Transactions: 12</p>
                <Button block color="danger" size="md">
                    Add New
                </Button>
            </Card.Body>
            </Card>
      </Grid.Col>
      <Grid.Col lg={9}>
      <Card>
            <Card.Header>
                <Card.Title>Sub-Channels</Card.Title>
                <Card.Options>
                <Button color="danger" size="sm">
                    Add New
                </Button>
                </Card.Options>
            </Card.Header>          
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
                            <Button size="sm"  RootComponent="a" color="secondary" href="/social/details">
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
                  {
                    key: "2",
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
                            <Button size="sm"  RootComponent="a" color="secondary" href="/social/details">
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
</SiteWrapper>;
}

export default ApplicationDetails;
