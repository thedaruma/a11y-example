import ActionBar from "./action-bar/ActionBar";
import Comments from "./comments/Comments";

export default function Content() {
  return (
    <div className="container">
      <section className="row">
        <div className="col-sm-5">
          <h2>How to write markup accessibly</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
      <div className="col-sm-5">
        <ActionBar />
      </div>
      <section className="col-sm-5">
        <div>
          <Comments />
        </div>
      </section>
    </div>
  );
}
