"use client"
import * as React from "react"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function DCard({
    title,
    shortDescription,
    description,
    technicalHighlights,
    language,
    framework,
    repositoryUrl,
    imageUrl,
    imageAlt,
}: {
    title: string;
    shortDescription: string,
    description: string;
    technicalHighlights: string[],
    language: string[],
    framework?: string[],
    repositoryUrl: string,
    imageUrl?: string,
    imageAlt?: string,
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="w-full min-w-[200px] max-w-xs sm:min-w-[240px] sm:max-w-xs md:min-w-[280px] md:max-w-sm flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-y-4 w-full">
                        <div className="flex-1 min-w-0 w-full">
                            <CardHeader className="space-y-2 min-w-0 w-full">
                                <CardTitle>
                                    <div className="text-lg font-semibold break-all text-center w-full">
                                        {title}
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-2 w-full">
                                <div className=" text-sm leading-snug break-words w-full max-w-2xl mb-4 text-center">
                                    {shortDescription}
                                </div>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            </DialogTrigger>
            <DialogContent className="p-0 sm:max-w-4xl">
                <div className="flex flex-col md:flex-row gap-y-6 gap-x-8 p-6">
                    <div className="flex-1 min-w-0">
                        <DialogHeader className="space-y-2">
                            <DialogTitle className="text-xl font-semibold break-words">{title}</DialogTitle>
                            <DialogDescription className="text-sm leading-snug break-words">
                                {description}
                            </DialogDescription>
                        </DialogHeader>
                        {technicalHighlights?.length > 0 && (
                            <div className="mt-4">
                                <div className="text-sm font-semibold text-foreground">技術的なハイライト</div>
                                <ul className="my-2 ml-6 list-disc [&>li]:mt-1 text-sm">
                                    {technicalHighlights.map((highlight, i) => (
                                        <li key={i} className="break-words">{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="mt-4">
                            <div className="text-sm font-semibold">言語</div>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-1 text-sm">
                                {language.map((lang, i) => (
                                    <li key={i} className="break-words">{lang}</li>
                                ))}
                            </ul>
                        </div>
                        {framework && framework.length > 0 && (
                            <div className="mt-2">
                                <div className="text-sm font-semibold">フレームワーク</div>
                                <ul className="my-2 ml-6 list-disc [&>li]:mt-1 text-sm">
                                    {framework.map((frame, i) => (
                                        <li key={i} className="break-words">{frame}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <DialogFooter className="mt-4 p-0">
                            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="link">Access Repository</Button>
                            </a>
                        </DialogFooter>
                    </div>
                    {imageUrl && (
                        <div className="relative w-full md:w-64 lg:w-80 aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[20px] bg-muted/10">
                            <Image
                                src={imageUrl}
                                alt={imageAlt || title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 256px, 320px"
                            />
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
