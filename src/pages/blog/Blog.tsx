import PostCell from "../../components/PostCell";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Blog() {
  const [selectedTab, setSelectedTab] = useState("view-all");

  const changeTab = (newTab: string) => {
    setSelectedTab(newTab);
  };

  const [fadeTwo, setFadeTwo] = useState(false);
  setTimeout(() => {
    if (!fadeTwo) {
      setFadeTwo(!fadeTwo);
    }
  }, 500);

  const [fadeThree, setFadeThree] = useState(false);
  setTimeout(() => {
    if (!fadeThree) {
      setFadeThree(!fadeThree);
    }
  }, 1000);

  const [fadeFour, setFadeFour] = useState(false);
  setTimeout(() => {
    if (!fadeFour) {
      setFadeFour(!fadeFour);
    }
  }, 1500);

  const [fadeFive, setFadeFive] = useState(false);
  setTimeout(() => {
    if (!fadeFive) {
      setFadeFive(!fadeFive);
    }
  }, 2000);

  return (
    <div className="flex flex-col gap-16 py-8 lg:w-[1000px] lg:mx-auto lg:py-24 lg:gap-24">
      <div className="flex flex-col gap-2">
        <Fade>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
            Welcome to my blog.
          </h1>
        </Fade>
        <Fade when={fadeTwo}>
          <h2 className="text-gray sm:text-xl lg:text-2xl">
            My stories and ideas in one place.
          </h2>
        </Fade>
      </div>

      {/* Recent Posts */}
      <div className="flex flex-col gap-8">
        <Fade when={fadeThree}>
          <div className="flex flex-col gap-2 lg:gap-3">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-[40px]">
              Recent Posts
            </h2>
            <div className="underline-mobile lg:underline-desktop"></div>
          </div>
          <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between mt-4">
            <Zoom when={fadeFour}>
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
              <PostCell
                date="June 24"
                title="Operators"
                body="You have probably seen the four basic math operations in elementary school: addition, subtraction, multiplication, and division. In Swift, you can use operators to perform these operations."
                destination="/blog/intro-to-ios/operators"
              />
            </Zoom>
          </div>
        </Fade>
      </div>

      {/* Other */}
      <div className="flex flex-col gap-8">
        <Fade when={fadeFour}>
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
            <Zoom when={fadeFive}>
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
              <PostCell
                date="June 24"
                title="Operators"
                body="You have probably seen the four basic math operations in elementary school: addition, subtraction, multiplication, and division. In Swift, you can use operators to perform these operations."
                destination="/blog/intro-to-ios/operators"
              />
            </Zoom>
          </div>
          <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between mt-4">
            <Zoom when={fadeFive}>
              <PostCell
                date="June 12"
                title="Data Types"
                body="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types you will use. However, there are many more types of data that Swift handles."
                destination="/blog/intro-to-ios/data-types"
              />
              <PostCell
                date="June 1"
                title="Variables and Constants"
                body="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants."
                destination="/blog/intro-to-ios/variables-and-constants"
              />
            </Zoom>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Blog;
