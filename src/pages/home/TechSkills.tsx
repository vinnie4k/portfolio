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

function TechSkills() {
  return (
    <div className="my-24 mx-[-32px] py-16 bg-offWhite1">
      <div className="flex flex-row justify-center">
        <img src={sqlite} alt="SQLite Logo" className="w-12" />
        <img src={java} alt="Java Logo" className="w-12 mx-8" />
        <img src={python} alt="Python Logo" className="w-12" />
      </div>
      <div className="flex flex-row justify-center my-16">
        <img src={swift} alt="Swift Logo" className="w-12" />
        <img src={react} alt="React Logo" className="w-12 mx-8" />
        <img src={nodejs} alt="NodeJS Logo" className="w-12 mr-8" />
        <img src={express} alt="ExpressJS Logo" className="w-12" />
      </div>
      <div className="flex flex-row justify-center">
        <img src={flask} alt="Flask Logo" className="w-12" />
        <img src={firebase} alt="Firebase Logo" className="w-12 mx-8" />
        <img src={googlecloud} alt="Google Cloud Logo" className="w-12" />
      </div>
    </div>
  );
}

export default TechSkills;
