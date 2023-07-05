import express from "/src/assets/tech/express.png";
import firebase from "/src/assets/tech/firebase.png";
import flask from "/src/assets/tech/flask.png";
import googlecloud from "/src/assets/tech/googlecloud.png";
import java from "/src/assets/tech/java.png";
import nodejs from "/src/assets/tech/nodejs.png";
import python from "/src/assets/tech/python.png";
import react from "/src/assets/tech/react.png";
import sqlite from "/src/assets/tech/sqlite.png";
import swift from "/src/assets/tech/swift.png";
import Fade from "react-reveal/Fade";

function TechSkills() {
  return (
    <Fade>
      <div className="sm:hidden mx-[-32px] py-16 bg-offWhite1 flex flex-col gap-16">
        <div className="flex flex-row justify-center gap-8">
          <img src={sqlite} alt="SQLite Logo" className="w-12" />
          <img src={java} alt="Java Logo" className="w-12" />
          <img src={python} alt="Python Logo" className="w-12" />
        </div>
        <div className="flex flex-row justify-center gap-8">
          <img src={swift} alt="Swift Logo" className="w-12" />
          <img src={react} alt="React Logo" className="w-12" />
          <img src={nodejs} alt="NodeJS Logo" className="w-12" />
          <img src={express} alt="ExpressJS Logo" className="w-12" />
        </div>
        <div className="flex flex-row justify-center gap-8">
          <img src={flask} alt="Flask Logo" className="w-12" />
          <img src={firebase} alt="Firebase Logo" className="w-12" />
          <img src={googlecloud} alt="Google Cloud Logo" className="w-12" />
        </div>
      </div>

      <div className="max-sm:hidden lg:hidden mx-[-64px] py-16 bg-offWhite1 flex flex-col gap-16">
        <div className="flex flex-row justify-center gap-16">
          <img src={sqlite} alt="SQLite Logo" className="w-12" />
          <img src={java} alt="Java Logo" className="w-12" />
          <img src={python} alt="Python Logo" className="w-12" />
          <img src={swift} alt="Swift Logo" className="w-12" />
          <img src={react} alt="React Logo" className="w-12" />
        </div>
        <div className="flex flex-row justify-center gap-16">
          <img src={nodejs} alt="NodeJS Logo" className="w-12" />
          <img src={express} alt="ExpressJS Logo" className="w-12" />
          <img src={flask} alt="Flask Logo" className="w-12" />
          <img src={firebase} alt="Firebase Logo" className="w-12" />
          <img src={googlecloud} alt="Google Cloud Logo" className="w-12" />
        </div>
      </div>

      <div className="max-lg:hidden mx-[calc(calc(-100vw+1000px)/2)] py-24 px-16 bg-offWhite1 flex flex-row justify-between">
        <img src={sqlite} alt="SQLite Logo" className="w-12" />
        <img src={java} alt="Java Logo" className="w-12" />
        <img src={python} alt="Python Logo" className="w-12" />
        <img src={swift} alt="Swift Logo" className="w-12" />
        <img src={react} alt="React Logo" className="w-12" />
        <img src={nodejs} alt="NodeJS Logo" className="w-12" />
        <img src={express} alt="ExpressJS Logo" className="w-12" />
        <img src={flask} alt="Flask Logo" className="w-12" />
        <img src={firebase} alt="Firebase Logo" className="w-12" />
        <img src={googlecloud} alt="Google Cloud Logo" className="w-12" />
      </div>
    </Fade>
  );
}

export default TechSkills;
