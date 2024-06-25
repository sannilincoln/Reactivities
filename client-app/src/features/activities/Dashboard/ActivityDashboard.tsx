import { Grid, List } from 'semantic-ui-react'
import { IActivity, IProp } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';





const ActivityDashboard = ({activities}:IProp) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities}/>
      </Grid.Column>
      <Grid.Column width="6">
       { 
       activities[0] &&
       <ActivityDetails activity={activities[0]}/>
       }
       <ActivityForm/>
      </Grid.Column>
    </Grid>
  );
}

export default ActivityDashboard