import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ullam animi rem assumenda, reiciendis blanditiis? Tempora ut
            corporis quisquam sit reprehenderit sapiente, dolores natus
            voluptatibus consequatur architecto, ex impedit ad?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            magnam nisi fugit beatae autem, sequi deserunt nostrum harum
            exercitationem, nobis veniam iusto eos rem ipsam a voluptatibus
            reprehenderit. Fuga, autem!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum
            tempora facilis perspiciatis natus voluptates excepturi, provident
            ducimus tenetur non. Deserunt veniam sequi corporis, perferendis vel
            molestias? Laborum, maxime unde.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            quis delectus quidem illum tempore pariatur nulla eligendi
            accusamus, unde at quia blanditiis ullam suscipit cupiditate amet
            deserunt vel asperiores soluta?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            quis delectus quidem illum tempore pariatur nulla eligendi
            accusamus, unde at quia blanditiis ullam suscipit cupiditate amet
            deserunt vel asperiores soluta?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Support:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            quis delectus quidem illum tempore pariatur nulla eligendi
            accusamus, unde at quia blanditiis ullam suscipit cupiditate amet
            deserunt vel asperiores soluta?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
