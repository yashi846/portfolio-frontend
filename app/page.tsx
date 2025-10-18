"use client"

import * as React from "react"
import DCard from "@/components/dialog-card"


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <DCard 
          title="Shooting Game" 
          shortDescription="UE5による3Dシューティングゲーム"
          description="UE5を使用して、3Dシューティングゲームを作りました。時間内に銃を得て的を射る。そして、ゴールするのが目的です。"
          technicalHighlights={["初めてのゲームプロジェクト"]}
          language={["Blueprint"]}
          repositoryUrl="https://github.com/yashi846/shooting-game"
          imageUrl="/images/works/shooting-game.png"
          imageAlt="Shooting game screenshot"
          />
      </div>
    </div>
  )
}
