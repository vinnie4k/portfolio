import Callout from "../blog/Callout";
import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import ReturnBlog from "../blog/ReturnBlog";
import post2_1 from "/src/assets/posts/post2/post2_1.png";
import post2_2 from "/src/assets/posts/post2/post2_2.png";
import post2_3 from "/src/assets/posts/post2/post2_3.png";
import post2_4 from "/src/assets/posts/post2/post2_4.png";
import post2_5 from "/src/assets/posts/post2/post2_5.png";
import post2_6 from "/src/assets/posts/post2/post2_6.png";

function Post2() {
  return (
    <div className="flex flex-col gap-10 mb-16 lg:post-desktop-settings">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="June 12, 2023"
          title="Data Types"
        />
      </div>

      {/* Intro */}
      <div className="post-section">
        <div>
          <p className="post-body">
            In the{" "}
            <a
              href="/blog/intro-to-ios/variables-and-constants"
              className="font-bold text-primary url-link"
            >
              Variables and Constants
            </a>{" "}
            section, we assigned a text to a variable. In Swift, this is called
            a <span className="font-bold">String</span> and is one of the most
            important types you will use. However, there are many more types of
            data that Swift handles. In the example earlier, let’s try to do the
            following:
          </p>
          <CodeBlock codeString={`var instructor\ninstructor = "Vin"`} />
          <img
            src={post2_1}
            alt="Missing type annotation"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">There are two ways we can fix this error:</p>
          <p className="ml-6 post-body">
            1. Initialize the variable with a value when we create it.
          </p>
          <p className="ml-6 post-body">
            2. Tell Swift what data type the variable will hold on later.
          </p>
          <p className="post-body">
            We’ve already seen (1) earlier, but for (2) we can use{" "}
            <span className="font-bold">type annotations</span>.
          </p>
        </div>
      </div>

      {/* Type Annotations */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Type Annotations</h2>
          <CodeBlock
            codeString={`var instructor: String\ninstructor = "Vin"`}
          />
          <img
            src={post2_2}
            alt="Using type annotations"
            className="post-code-image"
          />
          <Callout
            icon="ℹ️"
            text="As convention, we only put a space after the colon and not before!"
          />
        </div>
        <div>
          <p className="post-body">
            The key takeaway here is that Swift is a{" "}
            <span className="font-bold">statically typed language</span>,
            meaning that the type of every property, constant and variable that
            we declare needs to be specified at compile time. This is a good
            thing because it prevents us from putting anything inside of the
            “box”. This is known as{" "}
            <span className="font-bold">type safety</span>. Let’s demonstrate
            this by introducing a new data type{" "}
            <span className="font-bold">Int</span> (integer).
          </p>
        </div>
      </div>

      {/* Integer and Type Safety */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Integer and Type Safety</h2>
          <CodeBlock
            codeString={`var instructor: String\ninstructor = "Vin"\n\nvar year: Int\nyear = 2025`}
          />
          <img
            src={post2_3}
            alt="Integer and type safety valid"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            Everything works fine, but what if we were to swap the values of{" "}
            <span className="post-code">instructor</span> and{" "}
            <span className="post-code">year</span>?
          </p>
          <img
            src={post2_4}
            alt="Integer and type safety invalid"
            className="post-code-image"
          />
        </div>
        <p className="post-body">
          Our code no longer compiles because we tried assigning a value whose
          type does not match the type of the variable at the time it was
          created.
        </p>
      </div>

      {/* Float and Double */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Float and Double</h2>
          <p className="post-body">
            You can store decimal numbers by using a{" "}
            <span className="font-bold">Float</span> and{" "}
            <span className="font-bold">Double</span>. The difference between
            these two is that a Double has twice the accuracy of a Float, and
            hence takes up more storage.
          </p>
          <img
            src={post2_5}
            alt="Float vs Double"
            className="post-code-image"
          />
        </div>
      </div>

      {/* Boolean */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Boolean</h2>
          <p className="post-body">
            A <span className="font-bold">Bool</span> (boolean) in Swift is a
            data type that can hold one of two values:{" "}
            <span className="post-code">true</span> or{" "}
            <span className="post-code">false</span>.
          </p>
          <img
            src={post2_6}
            alt="Using booleans in Swift"
            className="post-code-image"
          />
        </div>
      </div>

      {/* Type Inferencing */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Type Inferencing</h2>
          <p className="post-body">
            Earlier when we assigned an initial value to a variable,
          </p>
          <CodeBlock codeString={`var instructor = "Vin"`} />
          <p className="post-body mt-4">
            Swift automatically <span className="italic">infers</span> what data
            type the variable will hold. This is known as{" "}
            <span className="font-bold">type inferencing</span>. You could also
            specify a data type and provide an initial value at the same time:
          </p>
          <CodeBlock codeString={`var instructor: String = "Vin"`} />
        </div>
        <p className="post-body">
          Most of the time, we will not be using type annotations and prefer
          having Swift infer our types. However, there are times when type
          annotation should be used. This will come with practice and from
          seeing how we write our code.
        </p>
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
            date="June 1"
            title="Variables and Constants"
            body="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants. What is the difference between these two? When do we use which?"
            destination="/blog/intro-to-ios/variables-and-constants"
          />
          <PostCell
            date="June 24"
            title="Operators"
            body="You have probably seen the four basic math operations in elementary school: addition, subtraction, multiplication, and division. In Swift, you can use operators to perform these operations."
            destination="/blog/intro-to-ios/operators"
          />
          <PostCell
            date="June 26"
            title="Data Structures"
            body="We learned how to use variables and constants to store data but only explored basic values. However, we often need to hold more complicated data that requires a specialized format for organizing and retrieving the data."
            destination="/blog/intro-to-ios/data-structures"
          />
        </div>
        <ReturnBlog />
      </div>
    </div>
  );
}

export default Post2;
