import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import ReturnBlog from "../blog/ReturnBlog";
import post3_1 from "/src/assets/posts/post3/post3_1.png";
import post3_2 from "/src/assets/posts/post3/post3_2.png";
import post3_3 from "/src/assets/posts/post3/post3_3.png";
import post3_4 from "/src/assets/posts/post3/post3_4.png";
import post3_5 from "/src/assets/posts/post3/post3_5.png";
import post3_6 from "/src/assets/posts/post3/post3_6.png";
import post3_7 from "/src/assets/posts/post3/post3_7.png";
import post3_8 from "/src/assets/posts/post3/post3_8.png";
import post3_9 from "/src/assets/posts/post3/post3_9.png";
import post3_10 from "/src/assets/posts/post3/post3_10.png";

function Post3() {
  return (
    <div className="flex flex-col gap-10 mb-16 lg:post-desktop-settings">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="June 24, 2023"
          title="Operators"
        />
      </div>

      {/* Intro */}
      <p className="post-body">
        You have probably seen the four basic math operations in elementary
        school: addition, subtraction, multiplication, and division. In Swift,
        you can use operators to perform these operations.
      </p>

      {/* Basic Operators */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Basic Operators</h2>
          <CodeBlock
            codeString={`var a = 0\na = a + 10\na = a - 5\na = a * a\na = a / 10`}
          />
          <img
            src={post3_1}
            alt="Using basic operations"
            className="post-code-image"
          />
          <p className="post-body">The following lines are equivalent: </p>
          <img
            src={post3_2}
            alt="Using basic operations shortcut"
            className="post-code-image"
          />
          <p className="post-body">
            These operators are self-explanatory; however, if you were to take a
            closer look at the the line{" "}
            <span className="post-code">a = a / 10</span> you can notice that
            the output is <span className="post-code">2</span> instead of{" "}
            <span className="post-code">2.5</span>. The reason for this is
            because the type of <span className="post-code">a</span> is an{" "}
            <span className="post-code">Int</span>. If you were to perform these
            operations on <span className="post-code">a</span>, then you must
            also use an <span className="post-code">Int</span>.
          </p>
          <img
            src={post3_3}
            alt="Using an Int type is required"
            className="post-code-image"
          />
          <p className="post-body">
            Then, how do we get the value <span className="post-code">2.5</span>
            ? Because the type of <span className="post-code">a</span> is an{" "}
            <span className="post-code">Int</span>, then we must introduce a new
            variable of type <span className="post-code">Double</span> or{" "}
            <span className="post-code">Float</span> since you cannot change the
            type of a variable once initialized. We would also need to make sure
            that the values in which you apply these operators on must also be a{" "}
            <span className="post-code">Double</span> or{" "}
            <span className="post-code">Float</span>.
          </p>
          <img
            src={post3_4}
            alt="Casting to a Double"
            className="post-code-image"
          />
          <p className="post-body">
            You may have noticed the line{" "}
            <span className="post-code">Double(a)</span>. This is known as{" "}
            <span className="font-bold">type casting</span>. Because{" "}
            <span className="post-code">a</span> is an{" "}
            <span className="post-code">Int</span> and we needed a{" "}
            <span className="post-code">Double</span>,{" "}
            <span className="post-code">Double(a)</span> converts the value{" "}
            <span className="post-code">2</span> to{" "}
            <span className="post-code">2.0</span>. Note that this{" "}
            <span className="italic">does not</span> change the type of{" "}
            <span className="post-code">a</span>. It only produces a value to be
            used for that operation.
          </p>
        </div>
        <div>
          <p className="post-body">
            One more common operator you may see is the{" "}
            <span className="font-bold">modulus</span> operator (
            <span className="post-code">%</span>). This is similar to the{" "}
            <span className="post-code">/</span> operator except you return the
            remainder.
          </p>
          <img
            src={post3_5}
            alt="Using the modulus operator"
            className="post-code-image"
          />
        </div>
      </div>

      {/* Common Operators */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Common Operators</h2>
          <p className="post-body">
            The following is a list of common operators that you are likely to
            use.
          </p>
          <CodeBlock
            codeString={`Comparison Operators
> // greater than
>= //greater than or equal to
< // less than
<= // less than or equal to
== // equal to
!= // not equal to\n
Logical Operators
|| // or
&& // and
! // not`}
          />
        </div>
      </div>

      {/* String Interpolation */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">String Interpolation</h2>
          <p className="post-body">
            <span className="font-bold">String interpolation</span> is a way of
            combining variables and constants inside a string. Take a look at
            this example:
          </p>
          <CodeBlock codeString={`var name = "Vin"\n"My name is \\(name)."`} />
          <img
            src={post3_6}
            alt="Using string interpolation"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            Of course, we could have used the{" "}
            <span className="post-code">+</span> operator to concatenate these
            strings together.
          </p>
          <img
            src={post3_7}
            alt="Using string concatenation"
            className="post-code-image"
          />
          <p className="post-body">
            The problem with this approach is efficiency especially if you want
            to concatenate multiple variables. Another issue with using{" "}
            <span className="post-code">+</span> is that Swift does not allow
            types such as <span className="post-code">Int</span> or{" "}
            <span className="post-code">Float</span> to be glued with a{" "}
            <span className="post-code">String</span>.
          </p>
          <img
            src={post3_8}
            alt="Using string concatenation with different types error"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            We could cast <span className="post-code">age</span> to a{" "}
            <span className="post-code">String</span> but that would be
            expensive.
          </p>
          <img
            src={post3_9}
            alt="Using string concatenation with different types by casting"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            Using string interpolation is a lot more efficient and looks cleaner
            too!
          </p>
          <img
            src={post3_10}
            alt="Using string interpolation with different types"
            className="post-code-image"
          />
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
            date="June 12"
            title="Data Types"
            body="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types you will use. However, there are many more types of data that Swift handles."
            destination="/blog/intro-to-ios/data-types"
          />
          <PostCell
            date="June 26"
            title="Data Structures"
            body="We learned how to use variables and constants to store data but only explored basic values. However, we often need to hold more complicated data that requires a specialized format for organizing and retrieving the data."
            destination="/blog/intro-to-ios/data-structures"
          />
          <PostCell
            date="June 28"
            title="Conditionals"
            body="If you want to execute a chunk of code only when a condition is met, then in Swift, you can use if, else if, and else statements. These are known as conditionals and are very common in many programming languages."
            destination="/blog/intro-to-ios/conditionals"
          />
        </div>
        <ReturnBlog />
      </div>
    </div>
  );
}

export default Post3;
