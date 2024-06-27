import { Grid, List } from 'semantic-ui-react'
import { IActivity, IProp } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';


interface IActivityDashboard extends IProp{
selectedActivity: IActivity | undefined;
selectActivity: (id: string) => void;
cancelSelectActivity: () => void;
editMode:boolean
openForm:(id:string) => void
closeForm: () => void
}


const ActivityDashboard = ({activities,selectActivity,selectedActivity,cancelSelectActivity,editMode,closeForm,openForm}:IActivityDashboard) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList 
        activities={activities} 
        selectActivity ={selectActivity}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {
        selectedActivity && 
        <ActivityDetails 
        activity={selectedActivity} 
        cancelSelectActivity={cancelSelectActivity}
        openForm ={openForm}
        />
        }
        {
          editMode &&
          <ActivityForm 
          closeForm={closeForm}
          activity={selectedActivity}
          />

        }
      </Grid.Column>
    </Grid>
  );
}

export default ActivityDashboard