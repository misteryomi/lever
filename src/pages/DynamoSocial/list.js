import React from "react";

import SiteWrapper from "../../SiteWrapper";
import { Formik } from "formik";
import { Form, Grid, Page, Card, Button, Table, Text } from 'tabler-react';

function Applications() {
  return <SiteWrapper>
      <Page.Content title="Applications">
          <Grid.Row>
          <Grid.Col width={12}>
            <Card>
                <Card.Header>
                <Card.Title>Channels</Card.Title>
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

export default Applications;
