import { Dimmer, Loader } from "semantic-ui-react";

interface ILoadingComponent {
  inverted?: boolean;
  content: string;
}

const LoadingComponent = ({
  inverted = true,
  content = "Loading...",
}: ILoadingComponent) => {
  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};

export default LoadingComponent;
