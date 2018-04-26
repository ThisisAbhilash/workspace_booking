import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';

export default class Dashboard extends React.Component {
  goToScreen(screenNumber) {
    var allScreens = ['BookMeetingRoom', 'BookWorkspace', 'BookingHistory', 'MyProfile'];
    var goToScreenNumber = allScreens[screenNumber - 1];
    this.props.navigation.navigate(goToScreenNumber, { userName: 'Test User' });
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#a32020"}}>
          <Left>
          </Left>
          <Body>
          </Body>
          <Right>
            <Icon name='notifications' />
          </Right>
        </Header>
        <Content>
          <Image
            source={require('../assets/dashboard.jpg')}
            style={{ flex: 1, height: 270, width: 500, resizeMode: 'cover' }}
          />
          <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingTop: 15 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ width: 160, height: 100, backgroundColor: '#ccc', alignItems: 'center' }} >
                <Text  style={styles.textDesignTest}>Book Meeting Rooms</Text>
                <TouchableHighlight onPress={() => this.goToScreen(1)}>
                  <Image
                    source={require('../assets/meetingRooms.png')}
                    style={{ flex: 1, height: 20, width: 80, resizeMode: 'cover' }}
                  />
                </TouchableHighlight>
              </View>
              <View style={{ width: 160, height: 100, backgroundColor: 'mistyrose', alignItems: 'center' }} >
                <Text  style={styles.textDesignTest}>Book Workspace</Text>
                <TouchableHighlight onPress={() => this.goToScreen(2)}>
                  <Image
                    source={require('../assets/workspace.png')}
                    style={{ flex: 1, height: 20, width: 80, resizeMode: 'cover', paddingTop: 10 }}
                  />
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 10 }}>
              <View style={{ width: 160, height: 100, backgroundColor: 'mistyrose', alignItems: 'center' }} >
                <Text style={styles.textDesignTest}>My Bookings</Text>
                <TouchableHighlight onPress={() => this.goToScreen(3)}>
                  <Image
                    source={require('../assets/my_bookings.jpg')}
                    style={{ flex: 1, height: 15, width: 80, resizeMode: 'cover' }}
                  />
                </TouchableHighlight>
              </View>
              <View style={{ width: 160, height: 100, backgroundColor: '#ccc', alignItems: 'center' }} >
                <Text style={styles.textDesignTest}>My Profile</Text>
                <TouchableHighlight onPress={() => this.goToScreen(4)}>
                  <Image
                    source={require('../assets/profile.png')}
                    style={{ flex: 1, height: 15, width: 70, resizeMode: 'cover', paddingTop: 10 }}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Content>
        <Footer style={{backgroundColor:"#a32020"}}>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  addPadding: {
    paddingTop: 10
  },
  textDesignTest: {
    fontSize: 10,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
});
