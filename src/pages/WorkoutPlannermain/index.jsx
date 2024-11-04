import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../..//components";
import FunFactText from "../..//components/FunFactText";
import WorkoutPlanGenerator from "../..//components/WorkoutPlanGenerator";
import React from "react";

export default function WorkoutPlannermainPage() {
    return (
        <>
            <Helmet>
                <title>Wellness Management System</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full">
                <div className="flex flex-col items-center gap-4 bg-coolgray-10">
                    <header className="flex items-center self-stretch">
                        <div className="relative h-[80px] w-[92%] content-center md:h-auto">
                            <Img src="images/img_lock.svg" alt="lock" className="absolute right-[-62.65px] top-6 m-auto h-[16px]" />
                            <div className="mx-auto flex w-full justify-center border-b border-solid border-coolgray-20 bg-default-white p-[18px]">
                                <div className="mx-auto flex w-full max-w-[1320px] items-end justify-between gap-5 sm:flex-col">
                                <Img
                                    src="images/img_header_logo.png"
                                    alt="Headerlogo"
                                    className="h-[38px] w-[104px] self-center object-contain"
                                />
                                <ul className="!mb-1 flex flex-wrap gap-8">
                                    <li>
                                        <a href="#">
                                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                                            Home
                                        </Heading>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                                            About Us
                                        </Heading>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                                            Services
                                        </Heading>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                                            Blog
                                        </Heading>
                                        </a>
                                    </li>
                                </ul>
                                <a href="#">
                                    <Img src="images/img_lock.svg" alt="Lock" className="h-[30px] sm:w-full" />
                                </a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="mx-auto mb-1 flex w-full max-w-[1406px] items-center gap-[30px] self-stretch md:flex-col md:px-5">
                        <div className="w-[20%] md:w-full">
                            <div className="rounded-[10px] bg-default-white px-5 py-6 sm:py-5">
                            <div className="mb-[222px] flex flex-col md:flex-row sm:flex-col">
                                <FunFactText />
                                <Text
                                size="p"
                                as="p"
                                className="ml-5 mr-[18px] w-full font-spacegrotesk text-[18px] font-normal leading-[22px] text-color_black-900_01 md:mx-0"
                                >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. {" "}
                                </Text> 
                                <FunFactText className="gap-5" />
                            </div>
                            </div>
                        </div>
                        <div className="flex-1 md:self-stretch">
                            <div className="rounded-[10px] bg-default-white p-5">
                            <div className="mt-4 flex items-center md:flex-col">
                                <div className="flex flex-1 flex-col gap-11 md:self-stretch">
                                <WorkoutPlanGenerator />
                                <WorkoutPlanGenerator
                                    titleText="Track your Workouts"
                                    descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    buttonText="Track Workout"
                                />
                                </div>
                                <div className="mt-2.5 flex w-[42%] flex-col items-end gap-[72px] px-7 md:w-full md:gap-[54px] sm:gap-9 sm:px-5">
                                <div className="flex w-[90%] flex-col items-start gap-[26px] md:w-full">
                                    <Heading
                                    size="3"
                                    as="h1"
                                    className="font-spacegrotesk text-[30px] font-medium text-color_black-900_01 md:text-[28px] sm:text-[26px]"
                                    >
                                    Analytics
                                    </Heading>
                                    <Img
                                    src="images/img_screenshot_2024_10_10.png"
                                    alt="Screenshot 2024"
                                    className="h-[182px] w-full rounded-[26px] object-cover md:h-auto"
                                    />
                                </div>
                                <Img
                                    src="images/img_screenshot_2024_10_10_266x340.png"
                                    alt="Screenshot2024"
                                    className="h-[266px] w-[90%] rounded-[26px] object-contain"
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}