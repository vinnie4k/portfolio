import PostCell from "../../components/PostCell";
import Zoom from "react-reveal/Zoom";

function RecentPosts() {
  return (
    <div>
      <Zoom>
        <h2 className="text-3xl font-bold pb-2 text-center lg:text-5xl">
          Recent Posts
        </h2>
        <p className="text-gray pb-16 text-center lg:text-xl">
          Check out my latest stories and ideas.
        </p>
        <div className="flex flex-col justify-center gap-16 lg:flex-row lg:gap-8">
          <Zoom>
            <PostCell
              date="June 30"
              title="Loops"
              body="When you want to repeat a code a certain number of times in Swift, you can either copy and paste the code or even better, you can use loops. There are two main loops in Swift: a for loop and a while loop."
              destination="/blog/intro-to-ios/loops"
            />
            <PostCell
              date="June 28"
              title="Conditionals"
              body="If you want to execute a chunk of code only when a condition is met, then in Swift, you can use if, else if, and else statements. These are known as conditionals."
              destination="/blog/intro-to-ios/conditionals"
            />
            <PostCell
              date="June 26"
              title="Data Structures"
              body="We learned how to use variables and constants to store data, but only explored basic values such as integer numbers and text. However, when we program, we often need to hold more complicated data that requires a specialized format for organizing and retrieving the data."
              destination="/blog/intro-to-ios/data-structures"
            />
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default RecentPosts;
