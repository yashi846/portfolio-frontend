"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "@/src/i18n/hooks";
import { useLocale } from "@/src/i18n/client-config";
import DCard from "@/components/dialog-card";
import { Button } from "@/components/ui/button";
import { getWorksClient, type Work } from "@/src/app/lib/data";

export function WorkPage(params: { lang: string }) {
  const { lang } = params;
  const [works, setWorks] = React.useState<Work[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    getWorksClient(lang)
      .then((data) => {
        if (!mounted) return;
        setWorks(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(String(err));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [lang]);

  if (loading) {
    return <div className="w-full text-center">Loading works...</div>;
  }

  if (error) {
    return (
      <div className="w-full text-center text-destructive">Error: {error}</div>
    );
  }
  return (
    <>
      {works.map((work) => (
        <DCard
          key={work.id}
          title={work.title}
          shortDescription={work.shortDescription}
          description={work.description}
          technicalHighlights={work.technicalHighlights}
          language={work.language}
          framework={work.framework}
          repositoryUrl={work.repositoryUrl}
          imageUrl={work.imageUrl || ""}
          imageAlt={work.imageAlt || ""}
        />
      ))}
    </>
  );
}

export default function Home() {
  const { t, tRaw } = useTranslations();
  const locale = useLocale();
  return (
    <main className="container mx-auto py-8 space-y-16">
      <h1 className="sr-only">Yashi Portfolio</h1>

      <section id="about-me" className="scroll-m-20">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-balance">
          {t("aboutMe.title")}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          {t("aboutMe.greeting")} <br />
          {t("aboutMe.university")} <br />
          {t("aboutMe.hobbies")} <br />
          {t("aboutMe.thanks")}
        </p>
      </section>

      <section id="profile" className="scroll-m-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t("profile.title")}
        </h2>
        <div className="mt-6 text-center space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("profile.education.title")}
            </h3>
            {(
              tRaw("profile.education.list") as Array<{
                period: string;
                detail: string;
              }>
            )?.map((edu, idx) => (
              <p className="leading-7" key={idx}>
                {edu.period}
                <br />
                {edu.detail}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              {t("profile.experience.title")}
            </h3>
            {(
              tRaw("profile.experience.list") as Array<{
                period: string;
                company: string;
              }>
            )?.map((exp, idx) => (
              <p className="leading-7" key={idx}>
                {exp.period}
                <br />
                <Link
                  href="https://tech.asahi.co.jp/internship"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="link"
                    className="p-0 h-auto font-normal text-base"
                  >
                    {exp.company}
                  </Button>
                </Link>
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              {t("profile.certification.title")}
            </h3>
            <p className="leading-7">
              {t("profile.certification.1")}
              <br />
              {t("profile.certification.2")} <br />
              {t("profile.certification.3")}
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="scroll-m-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t("works.title")}
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto place-items-center">
          <WorkPage lang={locale}></WorkPage>
        </div>
      </section>

      <section id="blog" className="scroll-m-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t("blog.title")}
        </h2>
        <div className="mt-6 mx-auto max-w-2xl text-center space-y-4">
          <p className="text-lg leading-7">{t("blog.description")}</p>
          <div className="flex flex-col items-center gap-2">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              {t("blog.comingSoon")}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
