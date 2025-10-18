"use client"

import * as React from "react"
import Link from "next/link"
import DCard from "@/components/dialog-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto py-8 space-y-16">
      <h1 className="sr-only">Yashi Portfolio</h1>

      <section id="about-me" className="scroll-m-20">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-balance">
          About Me
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          こんにちは <br />
          早稲田大学 基幹理工学部 情報通信学科 3年生のYashiです <br />
          趣味は漫画、アニメ、ゲーム、海外ドラマ、料理、読書です <br />
          よろしくお願いします!
        </p>
      </section>

      <section id="profile" className="scroll-m-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">Profile</h2>
        <div className="mt-6 text-center space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="leading-7">
              2023年4月 - 現在<br />
              早稲田大学 基幹理工学部 情報通信学科 在学
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Experience</h3>
            <p className="leading-7">
              2025年7-8月<br />
              <Link href="https://tech.asahi.co.jp/internship" target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="p-0 h-auto font-normal text-base">
                  ABC DX Tech Internship
                </Button>
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Certification</h3>
            <p className="leading-7">
              2024年8月 TOEFL iBT 71点<br />
              2025年8月 CG エンジニア検定 ベーシック <br />
              2025年9月 Google Cybersecurity Certificate
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="scroll-m-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">Works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto place-items-center">
          <DCard
            title="Portfolio Website Frontend"
            shortDescription="ポートフォリオサイトのフロントエンド"
            description="このポートフォリオサイトをNext.js、TypeScript、Tailwind CSSを使用して作成しました。shadcn/uiコンポーネントを活用し、レスポンシブデザインを実装しています。"
            technicalHighlights={["初めてのサイト制作", "初めてのフロントエンド"]}
            language={["TypeScript"]}
            framework={["Next.js", "React"]}
            repositoryUrl="https://github.com/yashi846/portfolio-frontend"
            imageUrl="/images/works/portfolio-frontend.png"
            imageAlt="Portfolio website frontend screenshot"
          />
          <DCard
            title="Portfolio Website Backend"
            shortDescription="ポートフォリオサイトのバックエンド"
            description="プロジェクト3の詳細な説明をここに記載します。このプロジェクトで使用した技術や学んだことを説明してください。"
            technicalHighlights={["初めてのサイト制作", "初めてのバックエンド"]}
            language={["Python", "JavaScript"]}
            framework={["React"]}
            repositoryUrl="https://github.com/yashi846/portfolio-backend"
          />
          <DCard
            title="Shooting Game"
            shortDescription="UE5による3Dシューティングゲーム"
            description="UE5を使用して、3Dシューティングゲームを作りました。時間内に銃を手にれて的を射る。そして、ゴールするのが目的です。"
            technicalHighlights={["初めてのゲームプロジェクト"]}
            language={["Blueprint"]}
            repositoryUrl="https://github.com/yashi846/shooting-game"
            imageUrl="/images/works/shooting-game.png"
            imageAlt="Shooting game screenshot"
          />
          <DCard
            title="Speed Game"
            shortDescription="UE5によるレーシングゲーム"
            description="第24回UE5ぷちコンのテーマ「スピード」を元に制作したレーシングゲームです。時速が40km/hを下回らないように、ゴールを目指します。"
            technicalHighlights={["ゲームの世界観が保たれるようなデザイン", "テンプレートの活用"]}
            language={["Blueprint"]}
            repositoryUrl="https://github.com/yashi846/speed_game"
            imageUrl="/images/works/speed-game.jpg"
            imageAlt="Speed game screenshot"
          />
        </div>
      </section>

      <section id="blog" className="scroll-m-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">Blog</h2>
        <div className="mt-6 mx-auto max-w-2xl text-center space-y-4">
          <p className="text-lg leading-7">
            現在、技術ブログを開発中です。完成後はこのページに最新記事や注目記事を掲載する予定です。
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Coming Soon</span>
          </div>
        </div>
      </section>
    </main>
  )
}