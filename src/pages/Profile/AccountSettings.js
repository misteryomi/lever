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
  TabbedCard
} from "tabler-react";


function AccountSettings() {
  return (
    <Form className="card">
    <Card.Body>
      <Card.Title>Account</Card.Title>
      <Grid.Row>
        <Grid.Col md={5}>
          <Form.Group>
            <Form.Label>Current Password</Form.Label>
            <Form.Input
              type="password"
              value="*******"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Input
              type="password"
              value="*******"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <Form.Group>
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Input type="password" placeholder="******"/>
          </Form.Group>
        </Grid.Col>
        </Grid.Row>
        <Button color="danger">Update Data</Button>
         </Card.Body>
         </Form>
  );
}

export default AccountSettings;
