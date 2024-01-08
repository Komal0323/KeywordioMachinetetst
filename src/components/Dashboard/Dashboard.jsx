import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="section">
        <div className="table-items">
          <table className="data" rules="rows">
            <thead>
              <tr>
                <th colspan="5" className="head">
                  Ad Insights
                  <span>
                    <i className="fa-regular fa-circle-question"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tr className="updown">
              <th>
                Campaigns<i class="angl fa-solid fa-angle-down"></i>
              </th>

              <th>
                Clicks<i class="angl fa-solid fa-angle-down"></i>
              </th>
              <th>
                Cost<i class="angl fa-solid fa-angle-down"></i>
              </th>
              <th>
                Conversions<i class="angl fa-solid fa-angle-down"></i>
              </th>
              <th>Revenue</th>
            </tr>
            <tr>
              <td>Cosmetics</td>
              <td>712</td>
              <td>USD 4,272</td>
              <td>8</td>
              <td>USD 16,568</td>
            </tr>

            <tr>
              <td>Serums</td>
              <td>3,961</td>
              <td>USD 27,331</td>
              <td>115</td>
              <td>USD 362,526</td>
            </tr>

            <tr>
              <td>Facewash</td>
              <td>9,462</td>
              <td>USD 76,831</td>
              <td>123</td>
              <td>USD 226,800</td>
            </tr>

            <tr>
              <td>Shampoos</td>
              <td>439</td>
              <td>USD 2,151</td>
              <td>5</td>
              <td>USD 11,029</td>
            </tr>

            <tr>
              <td>Conditioners</td>
              <td>1,680</td>
              <td>USD 3,864</td>
              <td>49</td>
              <td>USD 175,245</td>
            </tr>

            <tr>
              <td>Facewash 2</td>
              <td>4,978</td>
              <td>USD 29,370</td>
              <td>189</td>
              <td>USD 623,106</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>26,510</td>
              <td>USD 1,43,819</td>
              <td>489</td>
              <td>USD 15,73,563</td>
            </tr>
          </table>
        </div>
        <div className="chart">
          <table className="data" rules="rows">
            <thead>
              <tr>
                <th colspan="5" className="head">
                  Ad Insights
                  <select name="clicks" id="clicks">
                    <option value="volvo">Clicks</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                  </select>
                  <span>
                    <i className="fa-regular fa-circle-question"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tr>
              <td>
                <div className="doughnut">
                  <div className="hole"></div>
                </div>
                <div className="labels">
                  <div className="rect-1"></div>
                  <p>25%Male</p>
                  <div className="rect-2"></div>
                  <p>25%Female</p>
                  <div className="rect-3"></div>
                  <p>50%Unknown</p>
                </div>
                <div className="right-corner">
                <i className="ring fa-solid fa-life-ring"></i>
                <i className="fa-solid fa-suitcase"></i>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
