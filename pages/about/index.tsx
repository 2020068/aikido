/** @format */

import { Button, Link } from "@mui/material";
import { t } from "i18next";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100">
      {/* Top Image */}
      <div className="w-full relative">
        <Image
          src="/aboutPage/aboutpage/aikidoAboutBackground.jpg" // Add your image path here
          alt="Top Banner"
          layout="responsive"
          width={1600}
          height={400} // Adjust height for the desired banner size
          className="object-cover"
        />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg p-10 rounded-lg flex flex-col md:flex-row items-center">
          {/* Left: Contact Info */}
          <div className="md:w-2/3 text-center md:text-left">
            <div className="button-group">
              <div className="flex flex-col items-end justify-end h-full">
                <Link href="..">
                  <Button className="bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]">
                    {t("about.button.back")}
                  </Button>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-5">About us</h1>
            <p className="mb-4">
              If you have any questions or would like to learn more about
              becoming a student at BigRock Aikikai, please call or email us at{" "}
              <a href="/" className="text-red-600 underline">
                Click here
              </a>
              .
            </p>

            <div className="mt-5">
              <h2 className="font-bold text-xl">
                Contact & Location Information
              </h2>
              <p>
                <strong>BigRock Aikikai</strong>
                <br />
                Sensei Steve Erickson
                <br />
                Chief Instructor
                <br />
                Ph. 403 617 6541
              </p>

              <p className="mt-4">
                <strong>BigRock Aikikai - Main Dojo</strong>
                <br />
                Bay G, 7004 - 5th Street SE
                <br />
                Calgary, Alberta, T2H 2G3
                <br />
                Ph. 403 201 8652
              </p>

              <p className="mt-4">
                <strong>BigRock Aikikai - South Fish Creek Dojo</strong>
                <br />
                South Fish Creek Recreation Complex
                <br />
                100, 333 Shawville Boulevard SE
                <br />
                Calgary, Alberta, T2Y 4H3
                <br />
                Ph. 403 201 8652
              </p>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="md:w-1/3 mt-10 md:mt-0 md:ml-10">
            <Image
              src="/aboutPage/aboutpage/aikidoAbout1.png"
              alt="Dojo Image"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/aboutPage/aboutpage/aikidoAbout2.jpg"
              alt="Dojo Image"
              width={300}
              height={200}
              className="rounded-lg shadow-md mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
