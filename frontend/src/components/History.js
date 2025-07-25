"use client"

import "./History.css"

const History = ({ history }) => {
  return (
    <div className="history">
      <h3>Recent Results</h3>
      {history.length > 0 ? (
        <div className="history-list">
          {history.map((item, index) => (
            <div key={index} className={`history-item ${item.result.color.toLowerCase()}`}>
              <span className="round-number">#{item.roundId}</span>
              <span className="result-number">{item.result.number}</span>
              <span className="result-color">{item.result.color}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-history">No history yet. Play a round!</p>
      )}
    </div>
  )
}

export default History
