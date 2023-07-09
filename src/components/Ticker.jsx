import React from "react";

const Ticker = ({ news }) => {
  return (
    <section className="ticker ticker--is-animating">
      <div className="ticker__inner">
        <div className="ticker__groups">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {news.map((item, j) => (
                <div key={j} className="ticker__group">
                  <span>{item}</span>
                  <span className="ticker__bullet">•</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticker;
