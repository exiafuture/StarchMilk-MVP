"use client";
import React, { useState } from "react"
import "./pricing.css";

const pricingData = {
  monthly: [
    {
      plan: "Starter",
      price: "$18.99",
      features: [
        "100 slots for content storage",
        "100 words each slot",
        "1 image per slot"
      ]
    },
    {
      plan: "Pro",
      price: "$24.99",
      features: [
        "150 slots for content storage",
        "200 words each slot",
        "3 images per slot",
        "a 30-second video per slot",
        "AI Prompt"
      ],
      popular: true,
    },
    {
      plan: "Advanced",
      price: "$39.99",
      features: [
        "240 slots for content storage",
        "250 words each slot",
        "6 images per slot",
        "a 60-second video per slot",
        "AI Prompt",
        "platform pushing"
      ],
    },
  ],
  annual: [
    {
      plan: "Starter",
      price: "$189.9",
      features: [
        "100 slots for content storage",
        "100 words each slot",
        "1 image per slot"
      ]
    },
    {
      plan: "Pro",
      price: "$249.9",
      features: [
        "150 slots for content storage",
        "200 words each slot",
        "3 images per slot",
        "a 30-second video per slot",
        "AI Prompt"
      ],
      popular: true,
    },
    {
      plan: "Advanced",
      price: "$399.9",
      features: [
        "240 slots for content storage",
        "250 words each slot",
        "6 images per slot",
        "a 60-second video per slot",
        "AI Prompt",
        "platform pushing"
      ],
    },
  ],
};

const comparisonData = {
  traits: [
    "Content Slots",
    "Words Per Slot",
    "Image Per Slot",
    "Video Per Slot",
    "AI Prompt",
    "Advisory",
    "Forum",
    "Editor Assistance"
  ],
  guide: {
    name: "Starter",
    slotSize: "100",
    slotSizeUpgrade: 1.0,
    wordSizePerSlot: "100",
    imagePerSlot: "1",
    imageUpgrade: 1.2,
    videoPerSlot: "❎",
    videoUpgrade: null,
    promptPerDay: "❎",
    promptUpgrade: null,
    advisory: "✅",
    forum: "✅",
    editor: "❎",
  },
  companion: {
    name: "Pro",
    slotSize: "150",
    slotSizeUpgrade: 0.5,
    wordSizePerSlot: "200",
    imagePerSlot: "3",
    imageUpgrade: 1.0,
    videoPerSlot: "30",
    videoUpgrade: 4.5,
    promptPerDay: "3",
    promptUpgrade: 4.5,
    advisory: "✅",
    forum: "✅",
    editor: "❎",
  },
  kick: {
    name: "Advanced",
    slotSize: "240",
    slotSizeUpgrade: 0.25,
    wordSizePerSlot: "250",
    imagePerSlot: "6",
    imageUpgrade: 0.5,
    videoPerSlot: "60",
    videoUpgrade: 3.5,
    promptPerDay: "8",
    promptUpgrade: 2.5,
    advisory: "✅",
    forum: "✅",
    editor: "✅",
  },
};

const Pricing = () => {
  const [view, setView] = useState<"monthly" | "annual">("monthly");
  const [plan, setPlan] = useState<"guide" | "companion" | "kick">("companion");
  const currentPricingDurationMode = pricingData[view];
  const currentTableView = comparisonData[plan];

  return (
    <div className="page">
      <header className="header">
        <h1>Choose your plan</h1>
        <p>Find the life saving solution to meet your requirements. Monthly or annual assistance is await!</p>
        <small>Use annual plans to enjoy 83% of the original price</small>

        <div className="toggle-assistance">
          <button className={view === "monthly" ? "active" : "inactive"}
            onClick={() => setView("monthly")}>
            Monthly Plan
          </button>
          <button
            className={view === "annual" ? "active" : "inactive"}
            onClick={() => setView("annual")}
          >
            Annual Plan
          </button>
        </div>
      </header>

      <section className="cards">
        {currentPricingDurationMode.map((plan, index) => (
          <div
            className={`card ${plan.popular ? "popular" : ""}`}
            key={index}
          >
            <h1>{plan.plan}</h1>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button>
              Choose <strong>{plan.plan}</strong>
            </button>
          </div>
        ))}
      </section>

      <section className="comparison-table">
        <h2>Compare Features on Plans</h2>

        {/**/}
        <div className="comparison-mobile-view">
          <div className="plan-selector">
            <button
              className={plan === "guide" ? "active" : ""}
              onClick={() => setPlan("guide")}
            >
              Starter
            </button>
            <button
              className={plan === "companion" ? "active" : ""}
              onClick={() => setPlan("companion")}
            >
              Pro
            </button>
            <button
              className={plan === "kick" ? "active" : ""}
              onClick={() => setPlan("kick")}
            >
              Advanced
            </button>
          </div>

          <div className="plan-details">
            <h3>{currentTableView.name}</h3>
            {comparisonData.traits.map((trait, index) => (
              <div key={index} className="trait-row">
                <span className="trait-name">{trait}</span>
                <span className="trait-value">
                  {trait === "Content Slots" && (
                    <>
                      {currentTableView.slotSize}
                      <small>{currentTableView.slotSizeUpgrade}</small>
                    </>
                  )}
                  {trait === "Words Per Slot" && currentTableView.wordSizePerSlot}
                  {trait === "Image Per Slot" && currentTableView.imagePerSlot}
                  {trait === "Video Per Slot" && (
                    <>
                      {currentTableView.videoPerSlot}
                      {currentTableView.videoUpgrade && (
                        <small> then {currentTableView.videoUpgrade}</small>
                      )}
                    </>
                  )}
                  {trait === "AI Prompt" && (
                    <>
                      {currentTableView.promptPerDay}
                      {currentTableView.promptUpgrade && (
                        <small> then {currentTableView.promptUpgrade}</small>
                      )}
                    </>
                  )}
                  {trait === "Advisory" && currentTableView.advisory}
                  {trait === "Forum" && currentTableView.forum}
                  {trait === "Editor's Choice" && currentTableView.editor}
                </span>
                {index !== comparisonData.traits.length - 1 && <hr className="divider" />}
              </div>
            ))}
          </div>
        </div>

        {/*table view, min width > 933px*/}

        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Starter</th>
              <th>Pro</th>
              <th>Advanced</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.traits.map((trait, index) => (
              <tr key={index}>
                <td>{trait}</td>
                <td>
                  {trait === "Content Slots" && (
                    <>
                      {comparisonData.guide.slotSize}
                      <br />
                      <small>then ${comparisonData.guide.slotSizeUpgrade} per slot</small>
                    </>
                  )}
                  {trait === "Words Per Slot" && comparisonData.guide.wordSizePerSlot}
                  {trait === "Image Per Slot" && (
                    <>
                      {comparisonData.guide.imagePerSlot}
                      <br />
                      <small>then ${comparisonData.guide.imageUpgrade} per slot</small>
                    </>
                  )}
                  {trait === "Video Per Slot" && (
                    <>
                      {comparisonData.guide.videoPerSlot}
                      {comparisonData.guide.videoUpgrade && (
                        <>
                          <br />
                          <small>then ${comparisonData.guide.videoUpgrade} per slot</small>
                        </>
                      )}
                    </>
                  )}
                  {trait === "AI Prompt" && (
                    <>
                      {comparisonData.guide.promptPerDay}
                      {comparisonData.guide.promptUpgrade && (
                        <>
                          <br />
                          <small>then {comparisonData.guide.promptUpgrade}</small>
                        </>)}
                    </>
                  )}
                  {trait === "Advisory" && comparisonData.guide.advisory}
                  {trait === "Forum" && comparisonData.guide.forum}
                  {trait === "Editor Assistance" && comparisonData.guide.editor}
                </td>

                <td>
                  {trait === "Content Slots" && (
                    <>
                      {comparisonData.companion.slotSize}
                      <br />
                      <small>then ${comparisonData.companion.slotSizeUpgrade} per slot</small>
                    </>
                  )}
                  {trait === "Words Per Slot" && comparisonData.companion.wordSizePerSlot}
                  {trait === "Image Per Slot" && (
                    <>
                      {comparisonData.companion.imagePerSlot}
                      {comparisonData.companion.imageUpgrade && (
                        <>

                          <br />
                          <small>then ${comparisonData.companion.imageUpgrade} per slot</small>
                        </>
                      )}
                    </>
                  )}
                  {trait === "Video Per Slot" && (
                    <>
                      {comparisonData.companion.videoPerSlot} sec video x 1
                      {comparisonData.companion.videoUpgrade && (
                        <>
                          <br />
                          <small>then ${comparisonData.companion.videoUpgrade} per 30 sec video</small>
                        </>
                      )}
                    </>
                  )}
                  {trait === "AI Prompt" && (
                    <>
                      x {comparisonData.companion.promptPerDay} per day
                      {comparisonData.companion.promptUpgrade && (
                        <>
                          <br />
                          <small>then ${comparisonData.companion.promptUpgrade} per prompt</small>
                        </>
                      )}
                    </>
                  )}
                  {trait === "Advisory" && comparisonData.companion.advisory}
                  {trait === "Forum" && comparisonData.companion.forum}
                  {trait === "Editor Assistance" && comparisonData.companion.editor}
                </td>

                <td>
                  {trait === "Content Slots" && (
                    <>
                      {comparisonData.kick.slotSize}
                      <br />
                      <small>then ${comparisonData.kick.slotSizeUpgrade} per slot</small>
                    </>
                  )}
                  {trait === "Words Per Slot" && comparisonData.kick.wordSizePerSlot}
                  {trait === "Image Per Slot" && (
                    <>
                      {comparisonData.kick.imagePerSlot}
                      {comparisonData.kick.imageUpgrade && (
                        <>
                          <br />
                          <small>then ${comparisonData.kick.imageUpgrade} per slot</small>
                        </>
                      )}
                    </>
                  )}
                  {trait === "Video Per Slot" && (
                    <>
                      {comparisonData.kick.videoPerSlot} sec video x 1
                      {comparisonData.kick.videoUpgrade && (
                        <>
                          <br />
                          <small>then ${comparisonData.kick.videoUpgrade} per {comparisonData.kick.videoPerSlot} sec video</small>
                        </>
                      )}
                    </>
                  )}
                  {trait === "AI Prompt" && (
                    <>
                      x {comparisonData.kick.promptPerDay} per day
                      {comparisonData.kick.promptUpgrade && (
                        <>
                          <br />
                          <small>then ${comparisonData.kick.promptUpgrade} per prompt</small>
                        </>
                      )}
                    </>
                  )}
                  {trait === "Advisory" && comparisonData.kick.advisory}
                  {trait === "Forum" && comparisonData.kick.forum}
                  {trait === "Editor Assistance" && comparisonData.kick.editor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Pricing;
