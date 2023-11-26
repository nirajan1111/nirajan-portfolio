import React from "react";
import Typed from "typed.js";

export default function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Machine Learning</i> Engineer",
        "&amp; Full stack Developer.",
      ],
      loop: !0,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1800,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} />
    </div>
  );
}
