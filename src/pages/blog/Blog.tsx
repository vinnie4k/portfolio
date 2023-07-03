import PostCell from "../../components/PostCell";
import { useState } from "react";

function Blog() {
  const [selectedTab, setSelectedTab] = useState("view-all");

  const changeTab = (newTab: string) => {
    setSelectedTab(newTab);
  };

  return (
    <div className="flex flex-col gap-16 py-8 lg:w-[1000px] lg:mx-auto lg:py-24 lg:gap-24">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
          Welcome to my blog.
        </h1>
        <h2 className="text-gray sm:text-xl lg:text-2xl">
          My stories and ideas in one place.
        </h2>
      </div>

      {/* Recent Posts */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 lg:gap-3">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-[40px]">
            Recent Posts
          </h2>
          <div className="underline-mobile lg:underline-desktop"></div>
        </div>
        <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between mt-4">
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

      {/* Other */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 lg:gap-3">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-[40px]">
            Other
          </h2>
          <div className="underline-mobile lg:underline-desktop"></div>
        </div>
        <div className="flex flex-row gap-6">
          <button
            className={`${
              selectedTab === "view-all" ? "selected-tab" : "non-selected-tab"
            }`}
            onClick={() => changeTab("view-all")}
          >
            All Posts
          </button>
          <button
            className={`${
              selectedTab === "intro-to-ios"
                ? "selected-tab"
                : "non-selected-tab"
            }`}
            onClick={() => changeTab("intro-to-ios")}
          >
            Intro to iOS
          </button>
        </div>
        <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between mt-4">
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
    </div>
  );
}

export default Blog;
