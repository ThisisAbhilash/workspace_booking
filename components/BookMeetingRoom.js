import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class BookMeetingRoom extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
          </Body>
          <Right>
            <Icon name='notifications' />
          </Right>
        </Header>
        <Content>
          <Text>
            mee
          </Text>
        </Content>
        <Footer>

        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
