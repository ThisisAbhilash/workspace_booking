import React from 'react';
import { StackNavigator } from 'react-navigation';

import Dashboard from './Dashboard';
import BookMeetingRoom from './BookMeetingRoom';
import BookWorkspace from './BookWorkspace';
import FilterOption from './FilterOption';
import Notifications from './Notifications';
import MyProfile from './MyProfile';
import BookingHistory from './BookingHistory';

const AllScreenStack = StackNavigator({
    Dashboard: { screen: Dashboard },
    BookMeetingRoom: {screen: BookMeetingRoom},
    BookWorkspace: { screen: BookWorkspace },
    FilterOption: { screen: FilterOption },
    MyProfile: { screen: MyProfile },
    BookingHistory: { screen: BookingHistory },
    Notifications: { screen: Notifications},
  },{
    headerMode: 'none',
    initialRouteName: 'Dashboard'
  });

  export default AllScreenStack;