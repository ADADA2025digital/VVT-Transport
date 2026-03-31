import React from "react";
import CountCard from "../CountCard";
import { countData } from "../../constant/data";

const CountSection = () => {
  return (
    <section className="vv-count-section container-fluid px-0">
      <div className="vv-count-strip">
        <div className="container">
          <div className="row g-0 align-items-center">
            {countData.map((item, index) => (
              <div className="col-6 col-lg-3" key={item.id}>
                <CountCard
                  number={item.number}
                  label={item.label}
                  showBorder={index !== countData.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;