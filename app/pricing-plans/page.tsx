"use client";
import React, { useState } from "react"
import "./pricing.css";

const pricingData = {
  monthly: [
    {
      plan: "Mere Guiding Plan",
      price: "$18.99",
      features: [
        "100 slots for content storage",
        "100 words each slot",
        "1 image per slot"
      ]
    },
    {
      plan: "Companion Plan",
      price: "$24.99",
      features: [
        "300 slots for content storage",
        "200 words each slot",
        "3 images per slot",
        "a 30-second video per slot",
        "AI Prompt"
      ],
      popular: true,
    },
    {
      plan: "Side Kick Plan",
      price: "$39.99",
      features: [
        "600 slots for content storage",
        "300 words each slot",
        "6 images per slot",
        "a 60-second video per slot",
        "AI Prompt",
        "platform pushing"
      ],
    },
  ],
  annual: [
    {
      plan: "Mere Guiding Plan",
      price: "$189.9",
      features: [
        "10 slots for content storage",
        "100 words each slot",
        "1 image per slot"
      ]
    },
    {
      plan: "Companion Plan",
      price: "$249.9",
      features: [
        "30 slots for content storage",
        "210 words each slot",
        "3 images per slot",
        "a 30-second video per slot",
        "AI Prompt"
      ],
      popular: true,
    },
    {
      plan: "Side Kick Plan",
      price: "$399.9",
      features: [
        "60 slots for content storage",
        "330 words each slot",
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
    slotSize: "100",
    slotSizeUpgrade: "1",
    wordSizePerSlot: "100",
    imagePerSlot: "1",
    imageUpgrade: 0,
    videoPerSlot: "❎",
    videoUpgrade: null,
    promptPerDay: 0,
    promptUpgrade: 0,
    advisory: "✅",
    forum: "✅",
    editor: "❎",
  },
  companion: {
    slotSize: "150",
    slotSizeUgrade: "0.5",
    wordSizePerSlot: "200",
    imagePerSlot: "3",
    imageUpgrade: "1.0",
    videoPerSlot: "30",
    videoUpgrade: "4.5",
    promptPerDay: "3",
    promptUpgrade: "4.5",
    advisory: "✅",
    forum: "✅",
    editor: "❎",
  },
  kick: {
    slotSize: "240",
    slotSizeUgrade: "0.25",
    wordSizePerSlot: "250",
    imagePerSlot: "6",
    imageUpgrade: "0.5",
    videoPerSlot: "60",
    videoUpgrade: "3.5",
    promptPerDay: "8",
    promptUpgrade: "2.5",
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
            <h2>{plan.plan}</h2>
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
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Mere</th>
              <th>Companion</th>
              <th>Side Kick</th>
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
                      <br />
                      <small>then {comparisonData.guide.promptUpgrade}</small>
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
                      <small>{comparisonData.companion.slotSizeUgrade}</small>
                    </>
                  )}
                  {trait === "Words Per Slot" && comparisonData.companion.wordSizePerSlot}
                  {trait === "Image Per Slot" && comparisonData.companion.imagePerSlot}
                  {trait === "Video Per Slot" && (
                    <>
                      {comparisonData.companion.videoPerSlot}
                      <br />
                      <small>then {comparisonData.companion.videoUpgrade}</small>
                    </>
                  )}
                  {trait === "AI Prompt" && (
                    <>
                      {comparisonData.companion.promptPerDay}
                      <br />
                      <small>then {comparisonData.companion.promptUpgrade}</small>
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
                      <small>{comparisonData.kick.slotSizeUgrade}</small>
                    </>
                  )}
                  {trait === "Words Per Slot" && comparisonData.kick.wordSizePerSlot}
                  {trait === "Image Per Slot" && comparisonData.kick.imagePerSlot}
                  {trait === "Video Per Slot" && (
                    <>
                      {comparisonData.kick.videoPerSlot}
                      <br />
                      <small>then {comparisonData.kick.videoUpgrade}</small>
                    </>
                  )}
                  {trait === "AI Prompt" && (
                    <>
                      {comparisonData.kick.promptPerDay}
                      <br />
                      <small>then {comparisonData.kick.promptUpgrade}</small>
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
