"use client";
import React, { useState } from "react"
import "./pricing.css";

const Pricing = () => {
  const [view, setView] = useState<"monthly" | "annual">("monthly");
  return (
    <div className="page">
      <header className="header">
        <h1>Choose your plan</h1>
        <p>Find the life saving solution to meet your requirements. Monthly or annual assistance is await!</p>

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

      {view === "monthly" && (
        <section className="cards">
          <div className="card">
            <h2>Mere Guiding Plan</h2>
            <p className="price">$8.99</p>
            <ul>
              <li>100 slots for idea storage</li>
              <li>100 words each slot</li>
              <li>3 images top per slot</li>
              <li>a 30 seconds video top per slot</li>
              <li>open forum access</li>
            </ul>
            <button>Choose <strong>Mere</strong></button>
          </div>
          <div className="card popular">
            <h2>Companion Plan</h2>
            <p className="price">$12.99</p>
            <ul>
              <li>300 slots for idea storage</li>
              <li>260 words each slot</li>
              <li>5 images top per slot</li>
              <li>a 90 seconds video top per slot</li>
              <li>open forum access</li>
            </ul>
            <button>Choose <strong>Companion</strong></button>
          </div>
          <div className="card">
            <h2>Side Kick Plan</h2>
            <p className="price">$18.99</p>
            <ul>
              <li>600 slots for idea storage</li>
              <li>350 words each slot</li>
              <li>10 images top per slot</li>
              <li>3 90-second videos per slot</li>
              <li>open forum access</li>
              <li>specialised advising</li>
            </ul>
            <button>Choose <strong>Side Kick</strong></button>
          </div>
        </section>
      )}

      {view === "annual" && (
        <section className="cards">
          <div className="card">
            <h2>Mere Guiding Plan</h2>
            <p className="price">$89.9</p>
            <ul>
              <li>100 slots for idea storage</li>
              <li>100 words each slot</li>
              <li>3 images top per slot</li>
              <li>a 30 seconds video top per slot</li>
              <li>open forum access</li>
            </ul>
            <button>Choose <strong>Mere</strong></button>
          </div>
          <div className="card popular">
            <h2>Companion Plan</h2>
            <p className="price">$129.9</p>
            <ul>
              <li>300 slots for idea storage</li>
              <li>260 words each slot</li>
              <li>5 images top per slot</li>
              <li>a 90 seconds video top per slot</li>
              <li>open forum access</li>
            </ul>
            <button>Choose <strong>Companion</strong></button>
          </div>
          <div className="card">
            <h2>Side Kick Plan</h2>
            <p className="price">$189.9</p>
            <ul>
              <li>600 slots for idea storage</li>
              <li>350 words each slot</li>
              <li>10 images top per slot</li>
              <li>3 90-second videos per slot</li>
              <li>open forum access</li>
              <li>specialised advising</li>
            </ul>
            <button>Choose <strong>Side Kick</strong></button>
          </div>
        </section>
      )}

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
                100
                <br />
                <small>then $0.05 per slot</small>
              </td>
              <td>
                300
                <br />
                <small>then $0.02 per slot</small>
              </td>
              <td>
                600
                <br />
                <small>then $0.01 per slot</small>
              </td>
            </tr>
            <tr>
              <td>Feature 1</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Feature 2</td>
              <td>❎</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Feature 3</td>
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
