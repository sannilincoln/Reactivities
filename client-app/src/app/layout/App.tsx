import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    IActivity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Activities.list().then((res) => {
      const newActivities: IActivity[] = [];
      res.forEach((x) => {
        x.date = x.date.split("T")[0];
        newActivities.push(x);
      });
      setActivities(newActivities);
      setLoading(false);
    });
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => id === x.id));
  };
  const handleCancelActivity = () => {
    setSelectedActivity(undefined);
  };
  const handleFormOpen = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelActivity();
    setEditMode(true);
  };
  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleCreateOrEditActivity = (activity: IActivity) => {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activities.filter((x) => x.id !== activity.id),
          activity,
        ]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, { ...activity }]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  };
  const handleDelete = (id: string) => {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((x) => x.id !== id)]);
      setSubmitting(false);
    });
  };

  if (loading) return <LoadingComponent content="Loading App" />;

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDelete}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default App;
