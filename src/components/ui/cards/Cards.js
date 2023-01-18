import Card from "../cards/Card";
import styles from "./Cards.module.css";
import Stories from "../story/Stories";
import { useState } from "react";

const commentsOne = [
  {
    id: 1,
    text: "beautiful",
    user: "cha_vbn@",
  },
  {
    id: 2,
    text: "awesome, dashing , great job babe!",
    user: "vikki",
  },
];

const commentsTwo = [
  {
    id: 3,
    text: "extempted very baby",
    user: "ch__vbn",
  },
];
const commentsThree = [
  {
    id: 4,
    text: "what is next?",
    user: "komal arora@",
  },
];

const Cards = (props) => {
  return (
    <>
      <div className={styles.cards}>
        <Stories />
        <Card
          accountName={"chauhan@..we"}
          storyBorder={true}
          image="https://picsum.photos/800/900"
          comments={commentsTwo}
          likedByText={"dadatlackum"}
          likedByNumber={54}
          hours={16}
        />
        <Card
          accountName={"mnxhhs"}
          storyBorder={true}
          image="https://picsum.photos/800/800"
          comments={commentsOne}
          likedByText={"sweetu"}
          likedByNumber={104}
          hours={23}
        />{" "}
        <Card
          accountName={"chauhan_"}
          storyBorder={true}
          image="https://picsum.photos/800/895"
          comments={commentsThree}
          likedByText={"chavvi"}
          likedByNumber={54}
          hours={16}
        />{" "}
        <Card
          accountName={"biden-dom"}
          storyBorder={false}
          image="https://picsum.photos/900/900"
          comments={commentsOne}
          likedByText={"react-native"}
          likedByNumber={230}
          hours={2}
        />
        <Card
          accountName={"zugrerbug"}
          storyBorder={true}
          image="https://picsum.photos/790/850"
          comments={commentsTwo}
          likedByText={"messi"}
          likedByNumber={1021}
          hours={9}
        />
        <Card
          accountName={"maxwell_stork"}
          storyBorder={true}
          image="https://picsum.photos/850/900"
          comments={commentsOne}
          likedByText={"arolnalodo"}
          likedByNumber={521}
          hours={6}
        />
        <Card
          accountName={"trump"}
          storyBorder={false}
          image="https://picsum.photos/855/895"
          comments={commentsOne}
          likedByText={"your_queen"}
          likedByNumber={14}
          hours={1}
        />
        <Card
          accountName={"maxwell_bing"}
          storyBorder={true}
          image="https://picsum.photos/950/950"
          comments={commentsOne}
          likedByText={"rohit"}
          likedByNumber={520}
          hours={6}
        />
      </div>
    </>
  );
};

export default Cards;
