import { useHistory, Link } from "react-router-dom";
import { ThreadObject } from "../Thread/Thread";

interface Props {
  thread: ThreadObject;
}

const ThreadCard = ({ thread }: Props) => {
  const id = thread._id;
  const title = thread.title;
  const content = thread.content;
  const history = useHistory();

  // TODO add ... if longer than 500 chars
  // TODO add style word wrap break word
  // TODO limit post length
  return (
    <Link to={`/thread/${id}`}>
      <div className="border border-primary rounded my-2 p-2">
        <h4>{title}</h4>
        <p style={{ wordWrap: "break-word" }}>{content.substring(1, 500)}</p>
      </div>
    </Link>
  );
};

export default ThreadCard;