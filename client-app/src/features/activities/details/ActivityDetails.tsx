import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from "semantic-ui-react";
import { IActivity, IProp } from "../../../app/models/activity";


interface IProp {
  activity: IActivity;
}

const ActivityDetails = ({activity}:IProp) => {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`}  />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span >{activity.date}</span>
        </CardMeta>
        <CardDescription>
          {activity.description}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <ButtonGroup widths='2'>
            <Button basic color="blue" content='Edit' />
            <Button basic color="grey" content='Cancel' />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default ActivityDetails