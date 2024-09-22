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

const tableData = {
  guide: [
    ["100", "0.5"],
    "100",
    ["1", "1"],
    [null],
    [null],
    "yes",
    "yes",
    "no"
  ],
  companion: [
    ["300", "0.2"],
    "200",
    ["3", "0.5"],
    ["30", "4.5"],
    ["3", "2.0"],
    "yes",
    "yes",
    "no"
  ],
  kick: [
    ["600", "0.1"],
    "300",
    ["6", "0.25"],
    ["60", "3.5"],
    ["8", "1.5"],
    "yes",
    "yes",
    "yes"
  ]
};

const Pricing = () => {
  const [view, setView] = useState<"monthly" | "annual">("monthly");
  const [plan, setPlan] = useState<"guide" | "companion" | "kick">("kick");
  const currentPricingDurationMode = pricingData[view];
  const currentTableView = tableData[plan];

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
            <tr>
              <td>Content Slots</td>
              <td>
                10
                <br />
                <small>then $0.5 per slot</small>
              </td>
              <td>
                30
                <br />
                <small>then $0.2 per slot</small>
              </td>
              <td>
                60
                <br />
                <small>then $0.1 per slot</small>
              </td>
            </tr>
            <tr>
              <td># Words per slot</td>
              <td>100</td>
              <td>210</td>
              <td>330</td>
            </tr>
            <tr>
              <td># Image per slot</td>
              <td>1</td>
              <td>3</td>
              <td>6</td>
            </tr>
            <tr>
              <td>video per slot</td>
              <td>❎</td>
              <td>
                30 sec video x 1
                <br />
                <small>then $4.5 per video</small>
              </td>
              <td>
                60 sec video x 1
                <br />
                <small>
                  then $3.5 per video
                </small>
              </td>
            </tr>
            <tr>
              <td>Generative Prompt</td>
              <td>❎</td>
              <td>
                x 3 per day
                <br />
                <small>then $2.0 per prompt</small>
              </td>
              <td>
                x 8 per day
                <br />
                <small>then $1.5 per prompt</small>
              </td>
            </tr>
            <tr>
              <td>Creation Advisory</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Open Forum</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Editor's Choice</td>
              <td>❎</td>
              <td>❎</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Pricing;
