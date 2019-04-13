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


function ProfileSettings() {
  return (
    <Form className="card">
    <Card.Body>
      <Card.Title>Profile</Card.Title>
      <Grid.Row>
        <Grid.Col md={5}>
          <Form.Group>
            <Form.Label>BVN</Form.Label>
            <Form.Input
              type="text"
              disabled
              placeholder="Enter BVN"
              value="1234567890"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Input
              type="text"
              placeholder="First Name"
              value="Ayodeji"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Input type="text" placeholder="Last name"  value="Fashola"/>
          </Form.Group>
        </Grid.Col>
        <Grid.Col sm={6} md={6}>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Input
              type="text"
              placeholder="+234****"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col md={6}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Input
              type="text"
              placeholder="Home Address"
              value="Nigeria"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Input
              type="text"
              placeholder="City"
              value="Melbourne"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <Form.Group>
            <Form.Label>Postal Code</Form.Label>
            <Form.Input type="number" placeholder="ZIP Code" />
          </Form.Group>
        </Grid.Col>
        <Grid.Col md={5}>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Select>
              <option>Nigeria</option>
            </Form.Select>
          </Form.Group>
        </Grid.Col>
        </Grid.Row>
        <Button color="danger">Update Data</Button>
         </Card.Body>
         </Form>

  );
}

export default ProfileSettings;
