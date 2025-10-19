
import * as React from "react";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import DCard from "@/components/dialog-card";
import { Button } from "@/components/ui/button";


export default async function Home() {
    const t = await getTranslations();
    return (
        <main className="container mx-auto py-8 space-y-16">
            <h1 className="sr-only">Yashi Portfolio</h1>

            <section id="about-me" className="scroll-m-20">
                <h2 className="text-center text-4xl font-extrabold tracking-tight text-balance">
                    {t('aboutMe.title')}
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                    {t('aboutMe.greeting')} <br />
                    {t('aboutMe.university')} <br />
                    {t('aboutMe.hobbies')} <br />
                    {t('aboutMe.thanks')}
                </p>
            </section>

            <section id="profile" className="scroll-m-20">
                <h2 className="text-center text-3xl font-bold tracking-tight">{t('profile.title')}</h2>
                <div className="mt-6 text-center space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold">{t('profile.education.title')}</h3>
                        {(t.raw('profile.education.list') as Array<{ period: string; detail: string }>).map((edu, idx) => (
                            <p className="leading-7" key={idx}>
                                {edu.period}<br />
                                {edu.detail}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{t('profile.experience.title')}</h3>
                        {(t.raw('profile.experience.list') as Array<{ period: string; company: string }>).map((exp, idx) => (
                            <p className="leading-7" key={idx}>
                                {exp.period}<br />
                                <Link href="https://tech.asahi.co.jp/internship" target="_blank" rel="noopener noreferrer">
                                    <Button variant="link" className="p-0 h-auto font-normal text-base">
                                        {exp.company}
                                    </Button>
                                </Link>
                            </p>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{t('profile.certification.title')}</h3>
                        <p className="leading-7">
                            {t('profile.certification.1')}<br />
                            {t('profile.certification.2')} <br />
                            {t('profile.certification.3')}
                        </p>
                    </div>
                </div>
            </section>

            <section id="works" className="scroll-m-20">
                <h2 className="text-center text-3xl font-bold tracking-tight">{t('works.title')}</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto place-items-center">
                    <DCard
                        title={t('works.frontend.title')}
                        shortDescription={t('works.frontend.shortDescription')}
                        description={t('works.frontend.description')}
                        technicalHighlights={[t('works.frontend.highlight1'), t('works.frontend.highlight2')]}
                        language={["TypeScript"]}
                        framework={["Next.js", "React"]}
                        repositoryUrl="https://github.com/yashi846/portfolio-frontend"
                        imageUrl="/images/works/portfolio-frontend.png"
                        imageAlt="Portfolio website frontend screenshot"
                    />
                    <DCard
                        title={t('works.backend.title')}
                        shortDescription={t('works.backend.shortDescription')}
                        description={t('works.backend.description')}
                        technicalHighlights={[t('works.backend.highlight1'), t('works.backend.highlight2')]}
                        language={["Python", "JavaScript"]}
                        framework={["React"]}
                        repositoryUrl="https://github.com/yashi846/portfolio-backend"
                    />
                    <DCard
                        title={t('works.shooting.title')}
                        shortDescription={t('works.shooting.shortDescription')}
                        description={t('works.shooting.description')}
                        technicalHighlights={[t('works.shooting.highlight1')]}
                        language={["Blueprint"]}
                        repositoryUrl="https://github.com/yashi846/shooting-game"
                        imageUrl="/images/works/shooting-game.png"
                        imageAlt="Shooting game screenshot"
                    />
                    <DCard
                        title={t('works.speed.title')}
                        shortDescription={t('works.speed.shortDescription')}
                        description={t('works.speed.description')}
                        technicalHighlights={[t('works.speed.highlight1'), t('works.speed.highlight2')]}
                        language={["Blueprint"]}
                        repositoryUrl="https://github.com/yashi846/speed_game"
                        imageUrl="/images/works/speed-game.jpg"
                        imageAlt="Speed game screenshot"
                    />
                </div>
            </section>

            <section id="blog" className="scroll-m-20">
                <h2 className="text-center text-3xl font-bold tracking-tight">{t('blog.title')}</h2>
                <div className="mt-6 mx-auto max-w-2xl text-center space-y-4">
                    <p className="text-lg leading-7">
                        {t('blog.description')}
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{t('blog.comingSoon')}</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
