import { useEffect, useState } from "react";

const DarkMode = ({ children }) => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const modeClasses = dark ? "bg-dark text-white" : "bg-light";

  const handleDarkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  return (
    <section className={`${modeClasses}`}>
      <div className="form-check form-switch d-flex justify-content-end px-5 pt-3 ">
        <input
          onChange={handleDarkMode}
          className="form-check-input"
          type="checkbox"
          id="activate"
          checked={dark}
        />
        <label className="form-check-label mx-2" htmlFor="activate">
          {dark ? "Dark Mode" : "Bright Mode"}
        </label>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default DarkMode;
