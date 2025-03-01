"use client";

import { UsesCategories, UsesTypes } from "../data/usesData";
import uses from "../data/usesData";
import NextImage from "next/image";
import setup from "@/public/images/setup.jpg";
import { Card, Chip, Link } from "@nextui-org/react";

export default function UsesPage() {
  return (
    <section className="flex min-h-screen flex-col gap-8 p-8 w-full items-center">
      <div className="flex flex-col w-4/6 max-sm:w-full m-8 gap-8 justify-between items-start">
        <div className="flex flex-col gap-2 w-full items-start m-auto">
          <h1 className={"text-foreground/90 font-extrabold text-3xl mb-1"}>
            Uses
          </h1>
          <h3 className={"text-foreground/80 font-medium text-xl mb-4"}>
            This is a{" "}
            {
              <Link href="https://uses.tech/" className="font-mono text-xl ">
                /uses
              </Link>
            }{" "}
            page, which is a list of all gadgets and softwares that I use daily
            for work, hobby & fun.
          </h3>
        </div>

        <Card className="border-none" radius="lg">
          <NextImage
            src={setup}
            alt="My Workstation"
            placeholder={"blur"}
            className={
              "w-full h-auto object-cover shadow-large rounded-large shadow-black/5"
            }
            loading={"lazy"}
          />
        </Card>
      </div>
      {Object.values(UsesTypes).map((type) => {
        return (
          <div
            key={type}
            className="flex flex-col gap-12 w-4/6 max-sm:w-full m-8 justify-between items-start"
          >
            <p className="text-4xl font-bold text-start">{type}</p>
            <div
              className={
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start"
              }
            >
              {uses
                .filter((use) => use.type === type)
                .map((use, index) => {
                  return (
                    <div
                      key={`${use.name}-${index}`}
                      className="flex flex-col w-full gap-2 items-start"
                    >
                      {use.specs != undefined ? (
                        <h1
                          className={
                            "text-foreground/90 font-extrabold text-xl mb-0 text-start"
                          }
                        >{`${use.name} - ${use.specs}`}</h1>
                      ) : (
                        <h1
                          className={
                            "text-foreground/90 font-extrabold text-xl mb-0 text-start"
                          }
                        >{`${use.name}`}</h1>
                      )}
                      <h3
                        className={
                          "text-foreground/80 font-regular text-md mb-1 text-start"
                        }
                      >
                        {use.description}
                      </h3>
                      <div className="flex flex-row gap-2">
                        {use.category.map((category, index) => {
                          return (
                            <Chip
                              key={index}
                              variant={"flat"}
                              size={"sm"}
                              color={
                                category === UsesCategories.Personal
                                  ? "primary"
                                  : "secondary"
                              }
                            >
                              {category}
                            </Chip>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
