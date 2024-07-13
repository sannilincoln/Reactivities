import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface IActivityForm {
  activity: IActivity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: IActivity) => void;
  submitting: boolean;
}

const ActivityForm = ({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
  submitting,
}: IActivityForm) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    description: "",
    category: "",
    city: "",
    venue: "",
    date: "",
  };
  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activity);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Date"
          type="date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          onClick={() => closeForm()}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
