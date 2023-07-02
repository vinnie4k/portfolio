import Callout from "../blog/Callout";
import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import post1_1 from "/src/assets/posts/post1/post1_1.png";
import post1_2 from "/src/assets/posts/post1/post1_2.png";
import post1_3 from "/src/assets/posts/post1/post1_3.png";

function Post1() {
  return (
    <div className="flex flex-col gap-10 mb-16">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="June 1, 2023"
          title="Variables and Constants"
        />
      </div>

      {/* Intro */}
      <div className="flex flex-col gap-8">
        <p className="post-body-mobile">
          In almost any program that we create, we will need to store data at
          some point. In Swift, you can store data in two ways:{" "}
          <span className="font-bold">variables</span> and{" "}
          <span className="font-bold">constants</span> . You can think of both
          variables and constants as a box holding some value inside. However,
          there is one key difference between these two. A variable can change
          its value whenever you want. On the contrary, a constant can hold a
          value once and can never be changed again.
        </p>
        <p className="post-body-mobile">
          It may seem pointless to have both variables and constants; however,
          there are many advantages. If Xcode knows that a value will never
          change, it will optimize your program to make it run faster. Another
          advantage is that if we were to make a mistake and change a value of a
          constant when we don’t need to, Xcode will tell us and our code will
          not compile.
        </p>
      </div>

      {/* Variables */}
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="post-heading-mobile">Variables</h2>
          <p className="post-body-mobile">
            To create a variable, we use the{" "}
            <span className="post-code">var</span> keyword.
          </p>
          <CodeBlock codeString={`var instructor = "Vin"`} />
        </div>
        <div>
          <p className="post-body-mobile">
            To change the value of the variable, we can simply do the following.
          </p>
          <CodeBlock
            codeString={`var instructor = "Vin"\ninstructor = "Richie"`}
          />
        </div>
        <div>
          <p className="post-body-mobile">
            Let’s try this in the Xcode playground.{" "}
          </p>
          <img
            src={post1_1}
            alt="Changing a variable in Swift"
            className="post-code-image-mobile"
          />
        </div>
        <div>
          <p className="post-body-mobile">
            Notice how we do not need to use the{" "}
            <span className="post-code">var</span> keyword the second time. You
            should only use the <span className="post-code">var</span> keyword
            if you are declaring a new variable. We can test this out in the
            Xcode playground.
          </p>
          <img
            src={post1_2}
            alt="Invalid declaration of a variable"
            className="post-code-image-mobile"
          />
        </div>
      </div>

      {/* Constants */}
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="post-heading-mobile">Constants</h2>
          <p className="post-body-mobile">
            Now, what if we wanted to use a constant instead of a variable? All
            you would need to do is to use the{" "}
            <span className="post-code">let</span> keyword instead.
          </p>
          <img
            src={post1_3}
            alt="Creating a constant"
            className="post-code-image-mobile"
          />
        </div>
        <p className="post-body-mobile">
          As you can see, changing the{" "}
          <span className="post-code">instructor</span> variable to a constant
          caused Xcode to get angry. The error message clearly informs us that
          we are attempting to change the value of a constant.
        </p>
        <Callout
          icon="ℹ️"
          text="It is also convention to use camelCase with Swift!"
        />
      </div>

      {/* Credits */}
      <Credits />

      {/* See More */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-center">
          More on Intro to iOS: Swift Basics
        </h2>
        <PostCell
          date="June 12"
          title="Data Types"
          body="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types you will use. However, there are many more types of data that Swift handles."
          destination="/blog/data-types"
        />
        <PostCell
          date="June 24"
          title="Operators"
          body="You have probably seen the four basic math operations in elementary school: addition, subtraction, multiplication, and division. In Swift, you can use operators to perform these operations."
          destination="/blog/operators"
        />
      </div>
    </div>
  );
}

export default Post1;
