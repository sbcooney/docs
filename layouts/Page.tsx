import Head from "next/head";
import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";
import Sidebar from "../components/Sidebar";
import FeedbackPopover from "../components/FeedbackPopover";

export const Page = ({ children }) => (
  <>
    <Meta />
    <Head>
      <title>Knock Docs</title>
    </Head>
    <div className="h-screen flex flex-col antialiased">
      <header className="border-b px-5 h-16 bg-gray-50 flex items-center">
        <div>
          <Link href="/">
            <a className="flex justify-center items-center">
              <img
                src="/icons/knock-wordmark.svg"
                alt="Knock"
                className="w-16 lg:w-20"
              />
              <span className="text-gray-500 ml-1 lg:text-lg mt-1 lg:mt-2">
                Docs
              </span>
            </a>
          </Link>
        </div>

        <div className="ml-auto">
          <FeedbackPopover />
        </div>
      </header>
      <div className="flex overflow-y-hidden h-full">
        <Sidebar />
        <main className="w-full h-full overflow-y-auto">
          <section className="p-5 lg:p-8 min-h-full">{children}</section>
          <footer className="border-t p-5 lg:p-8">
            <section className="mx-auto  w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center">
              <div className="text-center lg:text-left">
                <img
                  src="/icons/knock-wordmark.svg"
                  alt="Knock"
                  className="w-16 mx-auto lg:mx-0"
                />
                <span className="text-sm text-gray-500 leading-tight">
                  Notifications infrastructure for developers.
                </span>
              </div>
              <div className="lg:ml-auto mt-3">
                <nav className="ml-auto">
                  <ul className="flex text-sm text-gray-700">
                    <li className="mr-5">
                      <a href="https://knock.app">Visit website</a>
                    </li>
                    <li>
                      <a href="mailto:support@knock.app">Contact us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </footer>
        </main>
      </div>
    </div>
  </>
);
