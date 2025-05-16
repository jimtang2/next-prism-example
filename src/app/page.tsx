import SyntaxHighlighter from "./prism"

const content = `spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/authdb
    username: user
    password: pass
  server:
    port: 8080
`

export default function Home() {
  return (
    <div>
      <pre className="language-yaml">
        <code className="language-yaml">{content}</code>
      </pre>
      <SyntaxHighlighter />
    </div>
  );
}

