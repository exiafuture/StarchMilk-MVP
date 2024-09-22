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

      {view === "monthly" && (
        <section className="cards">
          <div className="card">
            <h2>Mere Guiding Plan</h2>
            <p className="price">$18.99</p>
            <ul>
              <li>100 slots for idea storage</li>
              <li>100 words each slot</li>
              <li>3 images top per slot</li>
            </ul>
            <button>Choose <strong>Mere</strong></button>
          </div>
          <div className="card popular">
            <h2>Companion Plan</h2>
            <p className="price">$24.99</p>
            <ul>
              <li>300 slots for idea storage</li>
              <li>260 words each slot</li>
              <li>5 images top per slot</li>
              <li>a 60-second video top per slot</li>
              <li>AI Prompt</li>
            </ul>
            <button>Choose <strong>Companion</strong></button>
          </div>
          <div className="card">
            <h2>Side Kick Plan</h2>
            <p className="price">$39.99</p>
            <ul>
              <li>600 slots for idea storage</li>
              <li>350 words each slot</li>
              <li>10 images top per slot</li>
              <li>a 90-second video per slot</li>
              <li>AI Prompt</li>
              <li>platform pushing</li>
            </ul>
            <button>Choose <strong>Side Kick</strong></button>
          </div>
        </section>
      )}

      {view === "annual" && (
        <section className="cards">
          <div className="card">
            <h2>Mere Guiding Plan</h2>
            <p className="price">$189.9</p>
            <ul>
              <li>100 slots for idea storage</li>
              <li>100 words each slot</li>
              <li>3 images top per slot</li>
            </ul>
            <button>Choose <strong>Mere</strong></button>
          </div>
          <div className="card popular">
            <h2>Companion Plan</h2>
            <p className="price">$249.9</p>
            <ul>
              <li>300 slots for idea storage</li>
              <li>260 words each slot</li>
              <li>5 images top per slot</li>
              <li>a 60-second video top per slot</li>
              <li>AI Prompt</li>
            </ul>
            <button>Choose <strong>Companion</strong></button>
          </div>
          <div className="card">
            <h2>Side Kick Plan</h2>
            <p className="price">$399.9</p>
            <ul>
              <li>600 slots for idea storage</li>
              <li>350 words each slot</li>
              <li>10 images top per slot</li>
              <li>a 90-second video per slot</li>
              <li>AI Prompt</li>
              <li>platform pushing</li>
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
                <small>then $0.5 per slot</small>
              </td>
              <td>
                300
                <br />
                <small>then $0.2 per slot</small>
              </td>
              <td>
                600
                <br />
                <small>then $0.1 per slot</small>
              </td>
            </tr>
            <tr>
              <td># Words per slot</td>
              <td>
                100
              </td>
              <td>260</td>
              <td>350</td>
            </tr>
            <tr>
              <td># Image per slot</td>
              <td>3</td>
              <td>5</td>
              <td>10</td>
            </tr>
            <tr>
              <td>video per slot</td>
              <td>❎</td>
              <td>
                60 sec video x 1
                <br />
                <small>then $4.5 per video</small>
              </td>
              <td>
                90 sec video x 1
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
