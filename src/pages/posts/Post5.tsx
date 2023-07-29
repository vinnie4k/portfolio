import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import ReturnBlog from "../blog/ReturnBlog";
import post5_1 from "/src/assets/posts/post5/post5_1.png";
import post5_2 from "/src/assets/posts/post5/post5_2.png";
import post5_3 from "/src/assets/posts/post5/post5_3.png";
import post5_4 from "/src/assets/posts/post5/post5_4.png";

function Post5() {
  return (
    <div className="flex flex-col gap-10 mb-16 lg:post-desktop-settings">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="June 28, 2023"
          title="Conditionals"
        />
      </div>

      {/* Main */}
      <div className="post-section">
        <div>
          <p className="post-body">
            If you want to execute a chunk of code only when a condition is met,
            then in Swift, you can use{" "}
            <span className="font-bold">if, else if, and else statements</span>.
            Let’s take a look at the following example:
          </p>
          <CodeBlock
            codeString={`var a = 0
if a == 0 {
    print("Zero")
} else {
    print("Not Zero")
}`}
          />
        </div>
        <div>
          <p className="post-body">
            When using conditionals, you must provide a condition which is an
            expression that evaluates to <span className="post-code">true</span>{" "}
            or
            <span className="post-code">false</span>. To enclose a block of code
            in Swift, you use curly brackets (
            <span className="post-code">{`{`}</span>
            and <span className="post-code">{`}`}</span>). In the example above,
            the expression <span className="post-code">a == 0</span> evaluates
            to <span className="post-code">true</span> so the block of code
            containing <span className="post-code">print("Zero")</span> will be
            executed.
          </p>
          <img
            src={post5_1}
            alt="Executing code in an if block"
            className="post-code-image"
          />
          <p className="post-body">
            Now, what if <span className="post-code">a == 0</span> evaluates to{" "}
            <span className="post-code">false</span>? In that case, Swift will
            read for the next condition, if any. Because the next statement is
            an <span className="post-code">else</span> statement, there is no
            condition to check so this block of code will be executed.
          </p>
          <img
            src={post5_2}
            alt="Executing code in an else block"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            Sometimes, we want to check for multiple conditions? In that case,
            there is more than one option:
          </p>
          <p className="ml-6 post-body">
            1. Use the <span className="post-code">&&</span> (and) or{" "}
            <span className="post-code">||</span> (or) operators
          </p>
          <p className="ml-6 post-body">
            2. Use an <span className="post-code">else if</span> statement
          </p>
          <p className="post-body">Let’s take a look at the second option.</p>
          <CodeBlock
            codeString={`var a = -6
if a < 0 {
	print("Negative")
} else if a % 2 == 0 {
	print("Even")
} else {
	print("Not even or negative")
}`}
          />
        </div>
        <div>
          <p className="post-body">
            First, the expression <span className="post-code">a &lt; 0</span> is
            evaluated. Since <span className="post-code">-6 &lt; 0</span>{" "}
            evaluates to <span className="post-code">true</span>, Swift executes
            the block of code containing{" "}
            <span className="post-code">print("Negative")</span>. Now, since the
            next statement is an else if statement, it will not be executed. The
            reason is because this else if statement is connected to an if
            statement. Since the first if statement evaluated to{" "}
            <span className="post-code">true</span>, Swift will not check any
            other statements that are connected.
          </p>
          <img
            src={post5_3}
            alt="Executing code in an if block nested"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            Now, if we were to change the else if statement to an if statement,
            Swift will check this statement because it is no longer connected to
            the first if statement.
          </p>
          <img
            src={post5_4}
            alt="Executing code in an if block not nested"
            className="post-code-image"
          />
          <p className="post-body">
            Because both conditions are met and they are not linked together,{" "}
            <span className="post-code">"Negative"</span> and{" "}
            <span className="post-code">"Even"</span> will both be printed.
          </p>
        </div>
      </div>

      {/* Guard Statement */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Guard Statement</h2>
          <p className="post-body">
            Sometimes we want to exit our code execution early on for efficiency
            purposes. This is where the{" "}
            <span className="font-bold">guard statement</span> comes in. A guard
            statement is similar to an if statement except an if statement runs
            when the condition is <span className="post-code">true</span>
            while a guard statement runs when the condition is{" "}
            <span className="post-code">false</span>. You can think of a guard
            statement as using an if statement with a “not equals” (
            <span className="post-code">!=</span>) or not” (
            <span className="post-code">!</span>) operator.
          </p>
          <p className="post-body">
            The format for a guard statement is as follows:
          </p>
          <CodeBlock
            codeString={`guard condition else {
    // block of code
    // control statement: return, break, continue, or throw
}`}
          />
          <p className="post-body">
            <span className="post-code">condition</span> is an expression that
            evaluates to <span className="post-code">true</span> or{" "}
            <span className="post-code">false</span>. If{" "}
            <span className="post-code">true</span>, then the block of code is
            not executed. If <span className="post-code">false</span>, then the
            block of code is executed. This is the exact opposite of an if
            statement.
          </p>
        </div>
      </div>

      {/* Credits */}
      <Credits />

      {/* See More */}
      <div className="flex flex-col gap-8 lg:gap-16">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">
          More on Intro to iOS: Swift Basics
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8 lg:justify-center">
          <PostCell
            date="June 26"
            title="Data Structures"
            body="We learned how to use variables and constants to store data but only explored basic values. However, we often need to hold more complicated data that requires a specialized format for organizing and retrieving the data."
            destination="/blog/intro-to-ios/data-structures"
          />
          <PostCell
            date="June 30"
            title="Loops"
            body="When you want to repeat a code a certain number of times in Swift, you can either copy and paste the code or even better, you can use loops. There are two main loops in Swift: a for loop and a while loop."
            destination="/blog/intro-to-ios/loops"
          />
          <PostCell
            date="July 1"
            title="Functions"
            body="Imagine a large scale application with thousands of lines of code. The codebase would be very messy! To solve this, we need to be able to reuse our code. We can do this with functions."
            destination="/blog/intro-to-ios/functions"
          />
        </div>
        <ReturnBlog />
      </div>
    </div>
  );
}

export default Post5;
