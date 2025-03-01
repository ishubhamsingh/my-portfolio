"use client";

import { UsesCategories, UsesTypes } from "../data/usesData";
import uses from "../data/usesData";
import NextImage from "next/image";
import setup from "@/public/images/setup.jpg";
import { Card, CardFooter, Chip } from "@nextui-org/react";

export default function UsesPage() {
  return (
    <section className="flex min-h-screen flex-col gap-8 p-8 w-full items-center">
      <div className="flex flex-col w-4/6 max-sm:w-full m-8 justify-between items-start">
        <Card isFooterBlurred className="border-none" radius="lg">
          <NextImage
            src={setup}
            alt="setup"
            placeholder={"blur"}
            className={
              "w-full h-auto object-cover shadow-large rounded-large shadow-black/5"
            }
            loading={"lazy"}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-col gap-2 w-full items-start m-auto">
              <p className="text-4xl font-bold text-white/90">Uses</p>
              <p className="text-md font-regular text-white/80">
                Discover the tools and gadgets that power my daily life. From
                work essentials to personal favorites, explore the items I rely
                on every day.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
      {Object.values(UsesTypes).map((type) => {
        return (
          <div
            key={type}
            className="flex flex-col gap-12 w-4/6 max-sm:w-full m-8 justify-between items-start"
          >
            <p className="text-4xl font-bold text-start underline">{type}</p>
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
