import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./SecretSauce.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SecretSauce() {
  useEffect(() => {
    // console.log("hello world");
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);

  return (
    <div className="secret-wrapper">
      <center>
        <h1 className="secret-header" data-aos="fade-up">
          Our Secret Sauce
        </h1>
      </center>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          //   date="Days - 01 - 10"
          iconStyle={{ background: "black", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title changer">
            Our Approach
          </h3>
          <h4 className="vertical-timeline-element-subtitle changer">
            {/* Project design */}
          </h4>
          <p className="changer">
            Clarifying needs, Concept and strategy call, Design and development
            and Launch and Support.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   date="2010 - 2011"
          iconStyle={{ background: "black", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title changer">
            Your Benifits
          </h3>
          <h4 className="vertical-timeline-element-subtitle changer">
            {/* San Francisco, CA */}
          </h4>
          <p className="changer">
            Reliability, Transparency, Security, Decentralization, Cost Saving
            and Automation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   date="2008 - 2010"
          iconStyle={{ background: "black", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title changer">
            We Provide supports for
          </h3>
          <h4 className="vertical-timeline-element-subtitle changer">
            {/* Los Angeles, CA */}
          </h4>

          <p className="changer">1. Business Strategy</p>
          <p className="changer">2. Marketing</p>
          <p className="changer">3. Coin/Token Listing</p>
          <p className="changer">4. Building Community</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   date="2006 - 2008"
          iconStyle={{ background: "black", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title changer">
            Idea Validation
          </h3>
          <h4 className="vertical-timeline-element-subtitle changer">
            {/* San Francisco, CA */}
          </h4>
          <p className="changer">1. Proof of concept evaluation</p>
          <p className="changer">2. Technological feasibility assessment</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          //   date="April 2013"
          iconStyle={{ background: "black", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title changer">
            Block Chain Tech Consulting
          </h3>

          <p className="changer">1. Protocol selection for your project</p>
          <p className="changer">2. Technological trade-offs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          //   date="November 2012"
          iconStyle={{ background: "black", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title changer">
            Security Audit
          </h3>
          <h4 className="vertical-timeline-element-subtitle changer">
            {/* Certification */}
          </h4>
          <p className="changer"> 1. Vulnerability Deduction</p>
          <p className="changer"> 2. Code Optimization research</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default SecretSauce;
