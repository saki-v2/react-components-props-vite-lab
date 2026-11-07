import Article from "./Article";

export default function ArticleList(props) {
  return (
    <main>
      <Article
        key={props.id}
        title={props.title}
        date={props.date}
        preview={props.preview}
      />
    </main>
  );
}
