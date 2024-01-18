"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabs = [
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certification", label: "Certification" },
];
const tabContent = {
  skills: [
    "UI/UX design",
    "UX Research",
    "Digital marketing",
    "User Experience Design",
    "Design Thinking",
    "Project Management",
    "User Research",
    "Market Research",
    "Prototypes",
    "Wireframing",
    "Digital Strategy",
    "Visual Design",
    "Data Analysis",
  ],
  education: [
    "Springboard, UX Design Career Track Certification, 2022-2023",
    "San Francisco State University, Bachelor in Interior Design and Minor in Art, 2015-2018",
  ],
  certification: ["Springboard, UX Design Career Track Certification"],
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I&apos;m a passionate product designer with a unique edge—a strong
            background in digital marketing. My journey into the world of user
            experience began with a fascination for understanding how consumers
            interact with digital products and services. As a former digital
            marketing professional, I bring a data-driven and customer-centric
            approach to crafting seamless and delightful user experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {tabs.map((tabInfo) => (
              <TabButton
                key={tabInfo.id}
                active={tab === tabInfo.id}
                selectTab={() => handleTabChange(tabInfo.id)}
              >
                {tabInfo.label}
              </TabButton>
            ))}
          </div>
          <div>
            <ul className="mt-8 list-disc pl-2">
              {tabContent[tab].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
