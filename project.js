/* globals scrollama */

const Project = {};

Project.scrolling = {
  scroller: undefined,
  steps: undefined,

  // Initialize Scrollama
  initialize: () => {
    const scrollWrapper = document.getElementById("scrolly");
    const article = scrollWrapper.querySelector("article");
    Project.scrolling.steps = Array.from(article.querySelectorAll(".step"));

    // Initialize Scrollama
    Project.scrolling.scroller = scrollama();
    Project.scrolling.scroller
      .setup({
        step: ".step",
        offset: 0.7, // Adjusted for better trigger timing
        debug: false,
      })
      .onStepEnter(Project.scrolling.handleStepEnter)
      .onStepExit(Project.scrolling.handleStepExit);

    Project.scrolling.handleResize();
  },

  // Handle step entering
  handleStepEnter: (stepInfo) => {
    console.log(`Entering Step ${stepInfo.index}`); // Debugging log

    // Remove "is-active" from all steps and apply to the current one
    document.querySelectorAll(".step").forEach((step) => step.classList.remove("is-active"));
    stepInfo.element.classList.add("is-active");

    console.log(`Step ${stepInfo.index} activated:`, stepInfo.element); // Debug log

    // Step 3: Ensure Flourish map reloads properly
    if (stepInfo.index === 3) {
      const flourishMap = document.querySelector(".map-container iframe");
      if (flourishMap) {
        flourishMap.src = flourishMap.src; // Reload map to refresh it
      }
    }

    // Step 4: Offender & Victim Graphs
    if (stepInfo.index === 4) {
        console.log("Step 4 detected: Animating Offender & Victim graphs.");
        
        // Animate Offender Chart & Text
        const offenderText = document.querySelector(".offender-text");
        const offenderChart = document.querySelector(".offender-chart");
        if (offenderText && offenderChart) {
            offenderText.style.opacity = "1";
            offenderText.style.transform = "translateX(0)";
            offenderChart.style.opacity = "1";
            offenderChart.style.transform = "translateX(0)";
        } else {
            console.log("ERROR: Offender chart or text not found.");
        }

        // Animate Victim Chart & Text
        const victimText = document.querySelector(".victim-text");
        const victimChart = document.querySelector(".victim-chart");
        if (victimText && victimChart) {
            victimText.style.opacity = "1";
            victimText.style.transform = "translateX(0)";
            victimChart.style.opacity = "1";
            victimChart.style.transform = "translateX(0)";
        } else {
            console.log("ERROR: Victim chart or text not found.");
        }
    }

    // Step 5: Overall Killings by Race
    if (stepInfo.index === 5) {
        console.log("Step 5 detected: Showing Overall Killings chart.");

        const overallChart = document.querySelector(".overall-killings-container");
        if (overallChart) {
            overallChart.style.opacity = "1";
            overallChart.style.transform = "translateY(0)";
        } else {
            console.log("ERROR: Overall Killings chart not found.");
        }
    }
    
    if (stepInfo.index === 5) {
    console.log("Step 5 detected: Showing Overall Killings by Race.");

    const overallKillingsRaceContainer = document.querySelector(".overall-killings-race-container");
    if (overallKillingsRaceContainer) {
        overallKillingsRaceContainer.style.opacity = "1";
        overallKillingsRaceContainer.style.transform = "translateY(0)";
    } else {
        console.log("ERROR: Overall Killings by Race container not found.");
    }
}
    
   // Step 6: Offender Outcome by Race
    
// Step 6: Offender Outcome by Race
if (stepInfo.index === 6) {
    console.log("Step 6 detected: Moving Graph Left & Showing Text.");

    // Ensure Wrapper is Active
    const offenderOutcomeWrapper = document.querySelector(".offender-outcome-wrapper");
    if (offenderOutcomeWrapper) {
        offenderOutcomeWrapper.style.opacity = "1";
        offenderOutcomeWrapper.style.transform = "translateY(0)";
    } else {
        console.log("ERROR: Offender Outcome wrapper not found.");
    }

    // Move Graph Left
    const offenderOutcomeContainer = document.querySelector(".offender-outcome-container");
    if (offenderOutcomeContainer) {
        offenderOutcomeContainer.style.transform = "translateX(-100px)";
    } else {
        console.log("ERROR: Offender Outcome container not found.");
    }

    // Show Text Box
    const offenderOutcomeText = document.querySelector(".offender-outcome-text");
    if (offenderOutcomeText) {
        offenderOutcomeText.style.opacity = "1";
        offenderOutcomeText.style.transform = "translateX(0)";
    } else {
        console.log("ERROR: Offender Outcome text not found.");
    }
}

    // Step 7: Conclusion - Fade In Text
    if (stepInfo.index === 7) {
      console.log("Step 7 detected: Showing Conclusion.");

      const conclusionContainer = document.querySelector(".conclusion-container");
      if (conclusionContainer) {
        conclusionContainer.style.opacity = "1";
        conclusionContainer.style.transform = "translateY(0)";
      } else {
        console.log("ERROR: Conclusion container not found.");
      }
    }
  },

  // Handle step exit (properly remove .is-active)
  handleStepExit: (stepInfo) => {
    stepInfo.element.classList.remove("is-active"); // Ensure only active steps remain
  },

  // Adjust elements to fit screen size
  handleResize: () => {
    const stepHeight = Math.floor(window.innerHeight * 0.9); // Slightly smaller for better spacing
    Project.scrolling.steps.forEach((step) => (step.style.height = `${stepHeight}px`));
    Project.scrolling.scroller.resize();
  },
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", Project.scrolling.initialize);
