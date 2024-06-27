import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IProp } from "../../../app/models/activity";


interface IActivityList extends IProp {
  selectActivity: (id: string) => void;
}


const ActivityList = ({ activities,selectActivity }: IActivityList) => {
  return <div>
        <Segment>
            <Item.Group divided>
                {activities.map(activity =>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div className="">{activity.description}</div>
                                <div className="">{activity.city},{activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated="right" content='View' color="blue"/>
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

  </div>;
};

export default ActivityList