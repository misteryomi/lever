// @flow

import React from "react";

import {
  Container,
  Grid,
  Card,
  Button,
  Form,
  Avatar,
  Profile,
  List,
  Media,
  Text,
  Comment,
  Tab,
  TabbedCard,
  Table
} from "tabler-react";


function RefereeSettings() {
  return (
    <Card>
    <Card.Header>
        <Card.Title>Referees</Card.Title>
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
          { content: "Full name"},
          { content: "Address" },
          { content: "Phone" },
          { content: "Email" },
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
                    Ayodeji Fashola
                  </Text>
                ),
              },
              {
                content: (
                  <a href="#" className="text-inherit">
                    Rd b8 bol awotan ib
                  </a>
                ),
              },
              { content: "803511289	" },
              { content: "7fashtop3@gmail.com" },
              {
                content: (
                  <React.Fragment>
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

  );
}

export default RefereeSettings;
