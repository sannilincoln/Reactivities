import { Button, Form, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';

interface IActivityForm {
  activity: IActivity | undefined;
  closeForm: () => void;
}

const ActivityForm = ({activity,closeForm}:IActivityForm) => {


  
  return (
    <Segment clearing>
        <Form>
            <Form.Input placeholder='Title'></Form.Input>
            <Form.TextArea  placeholder='Description'></Form.TextArea>
            <Form.Input placeholder='Category'></Form.Input>
            <Form.Input placeholder='Date'></Form.Input>
            <Form.Input placeholder='City'></Form.Input>
            <Form.Input placeholder='Venue'></Form.Input>
            <Button onClick={() => closeForm()} floated='right' positive type='submit' content='Submit'/>
            <Button onClick={() => closeForm()} floated='right' type='button' content='Cancel'/>
        </Form>
    </Segment>
  )
}

export default ActivityForm