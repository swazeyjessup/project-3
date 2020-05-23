import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import UserDash from './UserDash/UserDash';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>
  !   I need to change something somewhere!!<br />{secretData} </CardText>}

  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};


export default Dashboard;

