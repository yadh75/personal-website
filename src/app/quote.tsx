"use client";

import { Fragment } from "react";

import useFetch from "@/hooks/useFetch";

import PaperCard from "@/components/contents/paper-card";
import { Skeleton } from "@/components/ui/skeleton";

import { generateRandomNumber } from "@/lib/utils";

interface IQuote {
    _id: string;
    author: string;
    content: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
}

export default function Quote() {
    const [data, fetching] = useFetch<IQuote>("https://api.quotable.io/random");

    return (
        <PaperCard key="quotes" title="Quotes">
            <div className="flex flex-col gap-2">
                {fetching ? (
                    <Fragment>
                        <Skeleton
                            style={{
                                width: `${generateRandomNumber(70, 100)}%`,
                            }}
                            className="h-7"
                        />
                        <Skeleton
                            style={{
                                width: `${generateRandomNumber(10, 30)}%`,
                            }}
                            className="h-6"
                        />
                    </Fragment>
                ) : (
                    data && (
                        <Fragment>
                            <q className="text-lg font-light">{data.content}</q>
                            <span className="font-medium">- {data.author}</span>
                        </Fragment>
                    )
                )}
            </div>
        </PaperCard>
    );
}
