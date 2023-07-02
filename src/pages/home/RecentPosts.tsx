import PostCell from "/src/components/PostCell";

function RecentPosts() {
  return (
    <div>
      <h2 className="text-3xl font-bold pb-2 text-center lg:text-5xl">
        Recent Posts
      </h2>
      <p className="text-gray pb-16 text-center lg:text-xl">
        Check out my latest stories and ideas.
      </p>
      <div className="flex flex-col justify-center gap-16 lg:flex-row lg:gap-8">
        <PostCell
          date="June 1"
          title="Variables and Constants"
          body="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants."
          destination="/blog/variables-and-constants"
        />
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

export default RecentPosts;
