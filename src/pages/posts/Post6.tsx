import Callout from "../blog/Callout";
import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import ReturnBlog from "../blog/ReturnBlog";
import post6_1 from "/src/assets/posts/post6/post6_1.png";
import post6_2 from "/src/assets/posts/post6/post6_2.png";
import post6_3 from "/src/assets/posts/post6/post6_3.png";
import post6_4 from "/src/assets/posts/post6/post6_4.png";
import post6_5 from "/src/assets/posts/post6/post6_5.png";

function Post6() {
  return (
    <div className="flex flex-col gap-10 mb-16 lg:post-desktop-settings">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="June 30, 2023"
          title="Loops"
        />
      </div>

      {/* Intro */}
      <p className="post-body">
        When you want to repeat a code a certain number of times in Swift, you
        can either copy and paste the code or even better, you can use loops.
        There are two main loops in Swift: a{" "}
        <span className="font-bold">for loop</span> and a{" "}
        <span className="font-bold">while loop</span>.
      </p>

      {/* Looping over a fixed number of times */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Looping over a fixed number of times</h2>
          <p className="post-body">
            Let’s say I wanted to print out the numbers{" "}
            <span className="post-code">1..10</span>. In Swift, you can use the
            closed range operator (<span className="post-code">...</span>) which
            is three periods in a row.
          </p>
          <CodeBlock
            codeString={`for i in 1...10 {
	print(i)
}`}
          />
          <img
            src={post6_1}
            alt="For loop with the closed range operator"
            className="post-code-image"
          />
          <Callout
            icon="ℹ️"
            text="In a couple of these examples, I used i as the loop variable. This is a common convention used by programmers, but you can name it whatever you want."
          />
        </div>
        <div>
          <p className="post-body">
            The variable <span className="post-code">i</span> is known as a{" "}
            <span className="font-bold">loop variable</span> which is a variable
            that lives within the scope and lifetime of the loop. For every
            iteration, the value of <span className="post-code">i</span> will
            change. Now, what if we didn’t need to use{" "}
            <span className="post-code">i</span> and just wanted to print{" "}
            <span className="post-code">"Hello Vin and Richie"</span> 10 times?
            We could still use{" "}
            <span className="post-code">for i in 1...10</span>; however, it
            would be better to use an underscore (
            <span className="post-code">_</span>) instead.
          </p>
          <CodeBlock
            codeString={`for _ in 1...10 {
	print("Hello Vin and Richie")
}`}
          />
        </div>
        <div>
          <p className="post-body">
            You may be wondering why <span className="post-code">...</span> is
            called a <span className="italic">closed range operator</span>.
            Well, that’s because there is also an{" "}
            <span className="font-bold">open range operator</span> (
            <span className="post-code">..&lt;</span>). The difference between
            these two is that the{" "}
            <span className="italic">closed range operator</span> is inclusive
            whereas the <span className="italic">open range operator</span> is
            not. The following code will only be executed 9 times. It goes up to
            but not including 10.
          </p>
          <CodeBlock
            codeString={`for _ in 1..<10 {
	print("Hello Vin and Richie")
}`}
          />
          <img
            src={post6_2}
            alt="For loop with the open range operator"
            className="post-code-image"
          />
          <Callout
            icon="ℹ️"
            text="The print statement is very useful for debugging purposes. The user will not be seeing the output when using the app. It is only for the programmer."
          />
        </div>
      </div>

      {/* Looping over arrays */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Looping over arrays</h2>
          <p className="post-body">
            Swift provides a nice way to loop over the elements of an array
            using the <span className="font-bold">for-in loop</span>.
          </p>
          <CodeBlock
            codeString={`var staff = ["Vin", "Richie", "Tiffany", "Jennifer", "Antoinette", "Elvis"]
for person in staff {
	print(person)
}`}
          />
          <p className="post-body mt-4">
            In this code, the loop variable is{" "}
            <span className="post-code">person</span>. For every iteration of
            this loop, the value of <span className="post-code">person</span>{" "}
            will be the value of every element inside of the array{" "}
            <span className="post-code">staff</span>, in order.
          </p>
          <img
            src={post6_3}
            alt="For in loop over arrays"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            Instead of looping over the <span className="italic">element</span>{" "}
            of the array, we could have looped over the{" "}
            <span className="italic">indices</span> of the array. The following
            code is equivalent:
          </p>
          <CodeBlock
            codeString={`var staff = ["Vin", "Richie", "Tiffany", "Jennifer", "Antoinette", "Elvis"]
for i in 0..<staff.count {
	print(staff[i])
}`}
          />
          <img
            src={post6_4}
            alt="Looping over indices"
            className="post-code-image"
          />
          <Callout
            icon="ℹ️"
            text="You can also nest for loops inside of other for loops!"
          />
        </div>
      </div>

      {/* While Loops */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">While Loops</h2>
          <p className="post-body">
            If you don’t know exactly how many times to repeat a block of code,
            but do know that you want to repeat it while a condition is true,
            then you can use a <span className="font-bold">while loop</span>.
          </p>
          <CodeBlock
            codeString={`var i = 0
while i < 10 {
	print(i)
	i += 1
}`}
          />
          <p className="post-body mt-4">
            The above code will print out the value of{" "}
            <span className="post-code">i</span> and increment the value of{" "}
            <span className="post-code">i</span> by 1{" "}
            <span className="italic">while</span>{" "}
            <span className="post-code">i &lt; 10</span> evaluates to{" "}
            <span className="post-code">true</span>.
          </p>
          <img
            src={post6_5}
            alt="Using a while loop"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            However, be very careful when using while loops because you can
            create an infinite loop. In the code below, the value of{" "}
            <span className="post-code">i</span> never changes and will always
            be less than 10. In this case, there will be an infinite loop:
          </p>
          <CodeBlock
            codeString={`var i = 0
while i < 10 {
	print(i)
	// i += 1 commented out
}`}
          />
          <div className="mt-4 flex flex-row gap-4 items-center py-4 px-6 bg-offWhite2 rounded-md lg:py-6 lg:px-8">
            <p className="lg:text-xl">{"ℹ️"}</p>
            <p className="font-bold lg:text-xl">
              You can use <span className="post-code">break</span> or{" "}
              <span className="post-code">continue</span> to stop/continue the
              loop but we do not recommend using this approach.
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
            date="June 28"
            title="Conditionals"
            body="If you want to execute a chunk of code only when a condition is met, then in Swift, you can use if, else if, and else statements. These are known as conditionals."
            destination="/blog/intro-to-ios/conditionals"
          />
          <PostCell
            date="July 1"
            title="Functions"
            body="Imagine a large scale application with thousands of lines of code. The codebase would be very messy! To solve this, we need to be able to reuse our code. We can do this with functions."
            destination="/blog/intro-to-ios/functions"
          />
          <PostCell
            date="July 3"
            title="Optionals"
            body="Sometimes we may want to show that our data does not have any value. If we were using Strings, then an empty string may be a good indicator for “no value”. The problem with this is that we are creating imaginary rules for ourselves."
            destination="/blog/intro-to-ios/optionals"
          />
        </div>
        <ReturnBlog />
      </div>
    </div>
  );
}

export default Post6;
