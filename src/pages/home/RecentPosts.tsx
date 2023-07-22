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
              date="June 26"
              title="Data Structures"
              body="We learned how to use variables and constants to store data, but only explored basic values such as integer numbers and text. However, when we program, we often need to hold more complicated data that requires a specialized format for organizing and retrieving the data."
              destination="/blog/intro-to-ios/data-structures"
            />
            <PostCell
              date="June 24"
              title="Operators"
              body="You have probably seen the four basic math operations in elementary school: addition, subtraction, multiplication, and division. In Swift, you can use operators to perform these operations."
              destination="/blog/intro-to-ios/operators"
            />
            <PostCell
              date="June 12"
              title="Data Types"
              body="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types you will use. However, there are many more types of data that Swift handles."
              destination="/blog/intro-to-ios/data-types"
            />
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default RecentPosts;
