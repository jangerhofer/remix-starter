export default function Index() {
  return (
    <div className="flex min-w-full min-h-screen">
      <div className="container p-10 mx-auto">
        <h1 className="prose-xl">Welcome to Remix</h1>
        <ul>
          <li>
            <a
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
              target="_blank"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
              target="_blank"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a href="https://remix.run/docs" rel="noreferrer" target="_blank">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
