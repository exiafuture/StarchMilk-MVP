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
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
            <button>Choose <strong>Mere</strong></button>
          </div>
          <div className="card popular">
            <h2>Companion Plan</h2>
            <p className="price">$12.99</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
            <button>Choose <strong>Companion</strong></button>
          </div>
          <div className="card">
            <h2>Side Kick Plan</h2>
            <p className="price">$18.99</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
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
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
            <button>Choose <strong>Mere</strong></button>
          </div>
          <div className="card popular">
            <h2>Companion Plan</h2>
            <p className="price">$129.9</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
            <button>Choose <strong>Companion</strong></button>
          </div>
          <div className="card">
            <h2>Side Kick Plan</h2>
            <p className="price">$189.9</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
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
