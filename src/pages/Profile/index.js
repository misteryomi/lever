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

import SiteWrapper from "../../SiteWrapper";
import ProfileSettings from './ProfileSettings';
import AccountSettings from './AccountSettings';
import RefereeSettings from './RefereeSettings';

function ProfilePage() {
  return (
    <SiteWrapper>
      <div className="my-3 my-md-5">
        <Container>
          <Grid.Row>
            <Grid.Col lg={4}>
              <Profile
                name="Tunji Doe"
                backgroundURL="assets/bg.jpg"
                avatarURL="assets/avatar.png"
                twitterURL={false}
              >
                Some Profile Information
              </Profile>

              <Card>
                <Card.Header>
                  <Card.Title>FAQs</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p>Coming soon</p>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col lg={8}>
                <TabbedCard initialTab="Profile">
                  <Tab title="Profile">
                    <ProfileSettings />
                  </Tab>
                  <Tab title="Account">
                    <AccountSettings />
                  </Tab>
                  <Tab title="Business">
                    <p>Coming soon</p>
                  </Tab>
                  <Tab title="Referee">
                    <RefereeSettings />
                  </Tab>
                </TabbedCard>            
            </Grid.Col>
          </Grid.Row>
        </Container>
      </div>
    </SiteWrapper>
  );
}

export default ProfilePage;
