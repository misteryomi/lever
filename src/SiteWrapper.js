import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

const navBarItems = [
  {
    value: "Dashboard",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Dynamo Social",
    icon: "user",
    subItems: [
      { value: "Apply", to: "/social/apply", LinkComponent: withRouter(NavLink) },
      {
        value: "Manage Applications",
        to: "/social/applications",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    value: "Settings",
    icon: "settings",
    subItems: [
      {
        value: "Profile",
        to: "/profile",
        LinkComponent: withRouter(NavLink),
      },
      { value: "Business", to: "/charts", LinkComponent: withRouter(NavLink) },
      {
        value: "Referee",
        to: "/profile",
        LinkComponent: withRouter(NavLink),
      },
      {
        value: "Account",
        to: "/profile",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    icon: "file-text",
    value: "External Link",
    to: "/sample-external-link",
  },
];

const accountDropdownProps = {
  avatarURL: "/assets/avatar.png",
  name: "Opensource NG",
  description: "User",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { isDivider: true },
    { icon: "log-out", value: "Sign out", LinkComponent: withRouter(NavLink), to: '/login'},
  ],
};

class SiteWrapper extends React.Component {
  state = {
    notificationsObjects: [
      {
        unread: true,
        avatarURL: "demo/faces/male/41.jpg",
        message: (
          <React.Fragment>
            <strong>Nathan</strong> pushed new commit: Fix page load performance
            issue.
          </React.Fragment>
        ),
        time: "10 minutes ago",
      },
      {
        unread: true,
        avatarURL: "demo/faces/female/1.jpg",
        message: (
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        ),
        time: "1 hour ago",
      },
      {
        unread: false,
        avatarURL: "demo/faces/female/18.jpg",
        message: (
          <React.Fragment>
            <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
          </React.Fragment>
        ),
        time: "2 hours ago",
      },
    ],
  };

  render() {
    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = this.state.notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Lever",
          imageURL: "/assets/logo-w.png",
          notificationsTray: {
            notificationsObjects,
            markAllAsRead: () =>
              this.setState(
                () => ({
                  notificationsObjects: this.state.notificationsObjects.map(
                    v => ({ ...v, unread: false })
                  ),
                }),
                () =>
                  setTimeout(
                    () =>
                      this.setState({
                        notificationsObjects: this.state.notificationsObjects.map(
                          v => ({ ...v, unread: true })
                        ),
                      }),
                    5000
                  )
              ),
            unread: unreadCount,
          },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          copyright: (
            <React.Fragment>
              Copyright © 2019 - Lever.ng
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="#">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
