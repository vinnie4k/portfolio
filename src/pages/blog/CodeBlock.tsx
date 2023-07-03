import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock(codeProp: CodeProp) {
  return (
    <div className="lg:mt-6">
      <SyntaxHighlighter
        language="swift"
        style={xcode}
        showLineNumbers="true"
        customStyle={{
          padding: "16px",
          backgroundColor: "#F0F0F0",
          fontSize: "14px",
          marginTop: "12px",
        }}
      >
        {codeProp.codeString}
      </SyntaxHighlighter>
    </div>
  );
}

interface CodeProp {
  codeString: string;
}

export default CodeBlock;
