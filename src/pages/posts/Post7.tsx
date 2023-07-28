import Callout from "../blog/Callout";
import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import ReturnBlog from "../blog/ReturnBlog";
import post7_1 from "/src/assets/posts/post7/post7_1.png";
import post7_2 from "/src/assets/posts/post7/post7_2.png";
import post7_3 from "/src/assets/posts/post7/post7_3.png";
import post7_4 from "/src/assets/posts/post7/post7_4.png";

function Post7() {
  return (
    <div className="flex flex-col gap-10 mb-16 lg:post-desktop-settings">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="July 1, 2023"
          title="Functions"
        />
      </div>

      {/* Main */}
      <div className="post-section">
        <div>
          <p className="post-body">
            Imagine a large scale application with thousands of lines of code.
            The codebase would be very messy! To solve this, we need to be able
            to reuse our code. We can do this with{" "}
            <span className="font-bold">functions</span>.
          </p>
          <p className="post-body">
            Functions allow you to define reusable blocks of code. We define a
            function by using the <span className="post-code">func</span>{" "}
            keyword followed by the name of the function (
            <span className="post-code">myName</span>) and open/close
            parentheses:
          </p>
          <CodeBlock
            codeString={`func myName() {
  print("My name is Vin")
}`}
          />
          <p className="post-body mt-4">
            If we were to just define this function in the playground, nothing
            will be printed out. This is because we also need to{" "}
            <span className="italic">call</span> the function. We can call the
            function we previously defined with the following code:
          </p>
          <CodeBlock codeString={`myName()`} />
          <p className="post-body mt-4">Let’s test this in the playground:</p>
          <img
            src={post7_1}
            alt="Defining and calling a function"
            className="post-code-image"
          />
        </div>
      </div>

      {/* Parameters and Arguments */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Parameters and Arguments</h2>
          <p className="post-body">
            The nice thing about functions is that you can pass in{" "}
            <span className="font-bold">arguments</span> to make your functions
            a lot more useful. Using the example above, let’s customize our
            function to make it a lot more versatile:
          </p>
          <CodeBlock
            codeString={`func myName(name: String) {
  print("My name is \\(name)")
}`}
          />
          <p className="post-body mt-4">
            This function has a parameter called{" "}
            <span className="post-code">name</span> which is of type{" "}
            <span className="post-code">String</span> and uses string
            interpolation to output the name. You would then need to pass in an{" "}
            <span className="font-bold">argument</span> to the function call:
          </p>
          <CodeBlock codeString={`myName(name: "Vin")`} />
          <img
            src={post7_2}
            alt="Passing in arguments to a function"
            className="post-code-image"
          />
          <Callout
            icon="ℹ️"
            text="Parameters and arguments are commonly confused by many. Arguments are passed into the function through the function call. Parameters are variables in the header of the function definition."
          />
        </div>
      </div>

      {/* External and Internal Parameter Names */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">
            External and Internal Parameter Names
          </h2>
          <p className="post-body">
            In Swift, you can change the way parameters are named in the
            function call and inside of the function definition.
          </p>
          <CodeBlock
            codeString={`func myName(name str: String) {
    print("My name is \\(str)")
}

myName(name: "Vin")`}
          />
        </div>
        <div>
          <p className="post-body">
            In this example, the name of the parameter within the function
            definition is <span className="post-code">str</span> but when I call
            the function, I use <span className="post-code">name</span>.{" "}
            <span className="post-code">str</span> is known as an{" "}
            <span className="font-bold">internal parameter</span> and{" "}
            <span className="post-code">name</span> is called an{" "}
            <span className="font-bold">external parameter</span>. This may not
            seem useful at first glance, but it is a very powerful feature once
            you begin writing code.
          </p>
        </div>
        <div>
          <p className="post-body">
            You can also use an underscore (<span className="post-code">_</span>
            ) as the <span className="italic">external parameter</span>.
          </p>
          <CodeBlock
            codeString={`func myName(_ name: String) {
    print("My name is \\(name)")
}

myName("Vin")`}
          />
        </div>
        <div>
          <p className="post-body">
            By doing this, you do not need to provide the external parameter
            name when passing in your argument in the function call.
          </p>
          <div className="mt-4 flex flex-row gap-4 items-center py-4 px-6 bg-offWhite2 rounded-md lg:py-6 lg:px-8">
            <p className="lg:text-xl">{"ℹ️"}</p>
            <p className="font-bold lg:text-xl">
              Common external parameter names include{" "}
              <span className="post-code">in</span>,{" "}
              <span className="post-code">for</span>, and{" "}
              <span className="post-code">with</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Returning Values */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Returning Values</h2>
          <p className="post-body">
            The functions that we defined earlier did not have any{" "}
            <span className="font-bold">return value</span>, meaning that when
            we called the function, nothing gets sent back to the function
            caller. However, many of the functions we create will have a return
            value. To do this in Swift, you use the right arrow (
            <span className="post-code">→</span>) followed by the return type.
          </p>
          <CodeBlock
            codeString={`func isEven(num: Int) -> Bool {
    if num % 2 == 0 {
        return true
    }
    return false
}`}
          />
        </div>
        <div>
          <p className="post-body">
            The function above will return{" "}
            <span className="post-code">true</span> if the argument that I pass
            in is an even number and <span className="post-code">false</span>{" "}
            otherwise.
          </p>
          <img
            src={post7_3}
            alt="Returning values from a function"
            className="post-code-image"
          />
          <p className="post-body">
            Because this function returns a value, I can do many things with
            this function call such as assigning the returned value to a
            variable.
          </p>
          <img
            src={post7_4}
            alt="Assining returned value from a function"
            className="post-code-image"
          />
          <div className="mt-4 flex flex-row gap-4 items-center py-4 px-6 bg-offWhite2 rounded-md lg:py-6 lg:px-8">
            <p className="lg:text-xl">{"ℹ️"}</p>
            <p className="font-bold lg:text-xl">
              If your function returns a value with only one line of code, you
              can omit the <span className="post-code">return</span> keyword.
              This is commonly seen in SwiftUI.
            </p>
          </div>
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
            date="June 30"
            title="Loops"
            body="When you want to repeat a code a certain number of times in Swift, you can either copy and paste the code or even better, you can use loops. There are two main loops in Swift: a for loop and a while loop."
            destination="/blog/intro-to-ios/loops"
          />
          <PostCell
            date="July 3"
            title="Optionals"
            body="Sometimes we may want to show that our data does not have any value. If we were using Strings, then an empty string may be a good indicator for “no value”. Can we do better?"
            destination="/blog/intro-to-ios/optionals"
          />
        </div>
        <ReturnBlog />
      </div>
    </div>
  );
}

export default Post7;
