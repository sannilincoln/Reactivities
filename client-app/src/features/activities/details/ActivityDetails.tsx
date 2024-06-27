import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";


interface IProp {
  activity: IActivity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

const ActivityDetails = ({activity,cancelSelectActivity,openForm}:IProp) => {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <ButtonGroup widths="2">
          <Button onClick={() => openForm(activity.id)} basic color="blue" content="Edit" />
          <Button
            onClick={() => cancelSelectActivity()} 
            basic
            color="grey"
            content="Cancel"
          />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default ActivityDetails