import PostCell from "../../components/PostCell";
import Fade from "react-reveal/Fade";

function RecentPosts() {
  return (
    <Fade>
      <div>
        <h2 className="text-3xl font-bold pb-2 text-center lg:text-5xl">
          Recent Posts
        </h2>
        <p className="text-gray pb-16 text-center lg:text-xl">
          Check out my latest stories and ideas.
        </p>
        <div className="flex flex-col justify-center gap-16 lg:flex-row lg:gap-8">
          <PostCell
            date="July 3"
            title="Optionals"
            body="Sometimes we may want to show that our data does not have any value. If we were using Strings, then an empty string may be a good indicator for “no value”. Can we do better?"
            destination="/blog/intro-to-ios/optionals"
          />
          <PostCell
            date="July 1"
            title="Functions"
            body="Imagine a large scale application with thousands of lines of code. The codebase would be very messy! To solve this, we need to be able to reuse our code. We can do this with functions."
            destination="/blog/intro-to-ios/functions"
          />
          <PostCell
            date="June 30"
            title="Loops"
            body="When you want to repeat a code a certain number of times in Swift, you can either copy and paste the code or even better, you can use loops. There are two main loops in Swift: a for loop and a while loop."
            destination="/blog/intro-to-ios/loops"
          />
        </div>
      </div>
    </Fade>
  );
}

export default RecentPosts;
