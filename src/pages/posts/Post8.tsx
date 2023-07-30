import Callout from "../blog/Callout";
import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import ReturnBlog from "../blog/ReturnBlog";
import post8_1 from "/src/assets/posts/post8/post8_1.png";
import post8_2 from "/src/assets/posts/post8/post8_2.png";
import post8_3 from "/src/assets/posts/post8/post8_3.png";
import post8_4 from "/src/assets/posts/post8/post8_4.png";
import post8_5 from "/src/assets/posts/post8/post8_5.png";

function Post8() {
  return (
    <div className="flex flex-col gap-10 mb-16 lg:post-desktop-settings">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="July 3, 2023"
          title="Optionals"
        />
      </div>

      {/* Intro */}
      <div className="post-section">
        <p className="post-body">
          Sometimes we may want to show that our data does not have any value.
          If we were using Strings, then an empty string may be a good indicator
          for “no value”. What about integers? We could use 0 or -1. The problem
          with this is that we are creating imaginary rules for ourselves. Swift
          solves this issue by introducing{" "}
          <span className="font-bold">optionals</span>.
        </p>
        <Callout
          icon="ℹ️"
          text="This is one of the most important concepts you will learn!"
        />
      </div>

      {/* Indicating an optional */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Indicating an optional</h2>
          <p className="post-body">
            To indicate an optional in Swift, we use a{" "}
            <span className="post-code">?</span> succeeding the data type. For
            example, a string optional (or optional string) is represented by{" "}
            <span className="post-code">String?</span>. This String optional can
            hold two things:
          </p>
          <p className="post-body ml-6">1. a String value</p>
          <p className="post-body ml-6">
            2. <span className="post-code">nil</span>
          </p>
          <p className="post-body">
            <span className="post-code">nil</span> means “nothing” or “no
            value”. To better understand optionals, let’s look at the following
            example:
          </p>
          <CodeBlock
            codeString={`func getSubteamLead(subteam: String) -> String? {
    if subteam == "ios" { return "Tiffany Pan" }
    if subteam == "design" { return "Christina Zeng" }
    if subteam == "marketing" { return "Eddie Chi" }
    if subteam == "android" { return "Emily Hu" }
    if subteam == "backend" { return "Joyce Wu" }

    return nil
}`}
          />
          <p className="post-body">
            This function returns a String optional with value{" "}
            <span className="post-code">“iOS is the best subteam”</span> if the
            argument is <span className="post-code">"ios"</span> and{" "}
            <span className="post-code">nil</span> otherwise. Let’s put this in
            the playground and try to store this value into a variable:
          </p>
          <img
            src={post8_1}
            alt="String? and String are different types"
            className="post-code-image"
          />
          <p className="post-body">
            What is the issue with this code? Well, the type of the variable{" "}
            <span className="post-code">iosLead</span> is a{" "}
            <span className="post-code">String</span> but the function returns a{" "}
            <span className="post-code">String?</span>. These two data types are{" "}
            <span className="italic">different</span>. In that case, we could
            change the data type of <span className="post-code">iosLead</span>{" "}
            to <span className="post-code">String?</span>.
          </p>
          <img
            src={post8_2}
            alt="String? and String are different types"
            className="post-code-image"
          />
          <p className="post-body">
            Okay, but what if there was a function that only takes in a{" "}
            <span className="post-code">String</span>
            and not a <span className="post-code">String?</span> but we still
            want to use the value returned from{" "}
            <span className="post-code">getSubteamLead</span>?
          </p>
          <CodeBlock
            codeString={`func getSubteamLead(subteam: String) -> String? {
    if subteam == "ios" { return "Tiffany Pan" }
    if subteam == "design" { return "Christina Zeng" }
    if subteam == "marketing" { return "Eddie Chi" }
    if subteam == "android" { return "Emily Hu" }
    if subteam == "backend" { return "Joyce Wu" }

    return nil
}

func cheerLead(name: String) {
    print("Woo! Go \\(name)!")
}

cheerLead(name: getSubteamLead(subteam: "ios"))`}
          />
          <p className="post-body">
            This code will not execute because{" "}
            <span className="post-code">getSubteamLead</span> returns a{" "}
            <span className="post-code">String?</span> but the function{" "}
            <span className="post-code">cheerLead</span> takes in a{" "}
            <span className="post-code">String</span>. In this case, we would
            need to unwrap the optional.
          </p>
        </div>
      </div>

      {/* Safely unwrapping optionals */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Safely unwrapping optionals</h2>
          <p className="post-body">
            In order to grab the non-nil value of an optional, we must{" "}
            <span className="font-bold">unwrap</span> it. There are three ways
            to do this:
          </p>
          <p className="post-body ml-6">
            1. <span className="post-code">if let</span>
          </p>
          <p className="post-body ml-6">
            2. <span className="post-code">guard let</span>
          </p>
          <p className="post-body ml-6">
            3. Force unwrapping (<span className="post-code">!</span>)
          </p>
          <p className="post-body">
            The first two provides a safe way to unwrap the optional. Using the
            example from earlier, let’s try to unwrap the optional:
          </p>
          <CodeBlock
            codeString={`func getSubteamLead(subteam: String) -> String? {
    if subteam == "ios" { return "Tiffany Pan" }
    if subteam == "design" { return "Christina Zeng" }
    if subteam == "marketing" { return "Eddie Chi" }
    if subteam == "android" { return "Emily Hu" }
    if subteam == "backend" { return "Joyce Wu" }

    return nil
}

func cheerLead(name: String) {
    print("Woo! Go \\(name)!")
}

if let leadName = getSubteamLead(subteam: "ios") {
    cheerLead(name: leadName)
}`}
          />
          <img
            src={post8_3}
            alt="Unwrapping an optional"
            className="post-code-image"
          />
          <p className="post-body">
            The constant <span className="post-code">leadName</span> holds the
            unwrapped value returned from the function call{" "}
            <span className="post-code">getSubteamLead</span>. We would then use
            <span className="post-code">leadName</span> within the{" "}
            <span className="italic">if</span> statement. Now, if the function
            returned <span className="post-code">nil</span> instead, then the
            block of code will not be executed.
          </p>
        </div>
        <div>
          <p className="post-body">
            We could also use a <span className="post-code">guard let</span>{" "}
            statement:
          </p>
          <CodeBlock
            codeString={`func getSubteamLead(subteam: String) -> String? {
    if subteam == "ios" { return "Tiffany Pan" }
    if subteam == "design" { return "Christina Zeng" }
    if subteam == "marketing" { return "Eddie Chi" }
    if subteam == "android" { return "Emily Hu" }
    if subteam == "backend" { return "Joyce Wu" }

    return nil
}

func cheerLead(name: String) {
    print("Woo! Go \\(name)!")
}

// Create a custom error
enum myError: Error {
    case incorrectSubteam
}

guard let leadName = getSubteamLead(subteam: "ios") else {
    // Usually you would return something here but because this is not
    // a function, we had to throw an error
    throw myError.incorrectSubteam
}

cheerLead(name: leadName)`}
          />
          <p className="post-body">
            The main difference between using an{" "}
            <span className="post-code">if let</span> versus a{" "}
            <span className="post-code">guard let</span> statement is the scope
            of the variable/constant. The constant{" "}
            <span className="post-code">leadName</span> lives{" "}
            <span className="italic">within</span> the block of code in an if
            let statement whereas in a{" "}
            <span className="post-code">guard let</span> statement, it lives{" "}
            <span className="italic">outside</span> of it. As you can see above,
            I am able to use the constant{" "}
            <span className="post-code">leadName</span> outside of the{" "}
            <span className="post-code">guard let</span> statement.
          </p>
          <div className="mt-4 flex flex-row gap-4 items-center py-4 px-6 bg-offWhite2 rounded-md lg:py-6 lg:px-8">
            <p className="lg:text-xl">{"ℹ️"}</p>
            <p className="font-bold lg:text-xl">
              You would want to use a{" "}
              <span className="post-code">guard let</span> statement if you want
              to use the value many times outside of the block of code, or when
              you want to terminate the code early when a condition is false for
              efficiency purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Force unwrapping optionals */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Force unwrapping optionals</h2>
          <p className="post-body">
            Another (not recommended) approach to unwrap an optional is to force
            unwrap it using an exclamation mark (
            <span className="post-code">!</span>).
          </p>
          <div className="mt-4 flex flex-row gap-4 items-center py-4 px-6 bg-offWhite2 rounded-md lg:py-6 lg:px-8">
            <p className="lg:text-xl">{"❗️"}</p>
            <p className="font-bold lg:text-xl">
              Be careful! If you try to unwrap an optional that is holding{" "}
              <span className="post-code">nil</span>, your program will crash!
            </p>
          </div>
          <p className="post-body mt-4">
            Let me emphasize this again. Your code will crash if you unwrap an
            optional that is holding <span className="post-code">nil</span>. You
            should only use this approach if you are 100% certain that the
            optional holds an actual value. However, most of the time you should
            not have to use this. Let’s use the code from earlier:
          </p>
          <CodeBlock
            codeString={`func getSubteamLead(subteam: String) -> String? {
    if subteam == "ios" { return "Tiffany Pan" }
    if subteam == "design" { return "Christina Zeng" }
    if subteam == "marketing" { return "Eddie Chi" }
    if subteam == "android" { return "Emily Hu" }
    if subteam == "backend" { return "Joyce Wu" }

    return nil
}

func cheerLead(name: String) {
    print("Woo! Go \\(name)!")
}

let leadName = getSubteamLead(subteam: "ios")
cheerLead(name: leadName!)`}
          />
          <p className="post-body">
            In this case, I know that my code will not crash because I am
            certain that <span className="post-code">leadName</span> will not
            hold <span className="post-code">nil</span>. However,{" "}
            <span className="post-code">leadName</span>{" "}
            <span className="italic">could</span> hold{" "}
            <span className="post-code">nil</span> and my code will crash if it
            does.
          </p>
          <img
            src={post8_4}
            alt="Force unwrapping an optional"
            className="post-code-image"
          />
        </div>
      </div>

      {/* Implicitly unwrapped optionals */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Implicitly unwrapped optionals</h2>
          <p className="post-body">
            Earlier, we mentioned that we can indicate an optional by using a
            question mark (<span className="post-code">?</span>). For example,
            we can indicate a String optional by doing{" "}
            <span className="post-code">String?</span>. We can also use an
            exclamation mark (<span className="post-code">!</span>) such as{" "}
            <span className="post-code">String!</span>. The difference between
            these two is that the constant or variable with the data type that
            contains the exclamation mark, does not need to be unwrapped before
            it is used. This is called an{" "}
            <span className="font-bold">implicitly unwrapped optional</span>.
            You unwrap the optional the moment the variable or constant is
            initialized. You are very likely to see this when we get into UIKit.
          </p>
          <div className="mt-4 flex flex-row gap-4 items-center py-4 px-6 bg-offWhite2 rounded-md lg:py-6 lg:px-8">
            <p className="lg:text-xl">{"ℹ️"}</p>
            <p className="font-bold lg:text-xl">
              Be careful because your code will still crash if this
              variable/constant holds <span className="post-code">nil</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Optional chaining */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Optional chaining</h2>
          <p className="post-body">
            It can get very annoying having to unwrap optionals using{" "}
            <span className="post-code">guard let</span> or{" "}
            <span className="post-code">if let</span> statements and can clutter
            your code a lot. This may cause many people to be tempted to force
            unwrap an optional which you should already know is not good. Let’s
            take a look at the following code:
          </p>
          <CodeBlock
            codeString={`func getSubteamLead(subteam: String) -> String? {
    if subteam == "ios" { return "Tiffany Pan" }
    if subteam == "design" { return "Christina Zeng" }
    if subteam == "marketing" { return "Eddie Chi" }
    if subteam == "android" { return "Emily Hu" }
    if subteam == "backend" { return "Joyce Wu" }

    return nil
}

let uppercaseDesign = getSubteamLead(subteam: "design").uppercased()`}
          />
          <p className="post-body">
            If we put this code in the playground, Xcode will give us an error.
          </p>
          <img
            src={post8_5}
            alt="Optional chaining"
            className="post-code-image"
          />
          <p className="post-body">
            The problem is that the{" "}
            <span className="post-code">uppercased</span> method is only
            available for <span className="post-code">String</span> types, not{" "}
            <span className="post-code">String?</span> types. Since{" "}
            <span className="post-code">getSubteamLead</span> returns a{" "}
            <span className="post-code">String?</span> we would need to unwrap
            it before we can use it in the{" "}
            <span className="post-code">uppercased</span> method. However, this
            is very annoying to do and can make our code cluttered. Thankfully,
            Swift allows us to use{" "}
            <span className="font-bold">optional chaining</span>:
          </p>
          <CodeBlock
            codeString={`let uppercaseDesign = getSubteamLead(subteam: "design")?.uppercased()`}
          />
          <p className="post-body">
            That extra <span className="post-code">?</span> after the call to{" "}
            <span className="post-code">getSubteamLead</span> is the{" "}
            <span className="italic">optional chaining</span>. This means
            everything after the <span className="post-code">?</span> will only
            be run if everything before it has a value and is not{" "}
            <span className="post-code">nil</span>. Try this in the playground
            and the error message will go away.
          </p>
        </div>
      </div>

      {/* Nil coalescing operator */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Nil coalescing operator</h2>
          <p className="post-body">
            Another clean way to handle optionals in your code is to use the{" "}
            <span className="font-bold">nil coalescing operator</span>. The
            following code is an example of how to use it:
          </p>
          <CodeBlock
            codeString={`let designLead = getSubteamLead(subteam: "design") ?? "Invalid"`}
          />
          <p className="post-body">
            The <span className="post-code">??</span> is the{" "}
            <span className="font-bold">nil coalescing operator</span> and it
            provides a default value if the optional is holding{" "}
            <span className="post-code">nil</span>. In the code above, if the
            call{" "}
            <span className="post-code">getSubteamLead(subteam: "design")</span>{" "}
            returned <span className="post-code">nil</span>, then the constant{" "}
            <span className="post-code">designLead</span> will hold the default
            value "<span className="post-code">Invalid"</span> instead of{" "}
            <span className="post-code">nil</span>. This is very nice because
            you do not have to unwrap anything, and ensures that there is an
            actual value.
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

export default Post8;
