import React from "react";

const Logo = ({ page }) => {
  return (
    <div className="flex items-end gap-1">
      {/* <h1 style={{ color: '#9388A2', fontFamily: 'Ubuntu Mono, monospace', fontSize: '1.6em', }}>
        Cosmo
      </h1> */}
      <h1 className=" text-violet-300 font-mono text-7xl">Cosmo</h1>

      {/* <h1 style={{ color: 'white', fontFamily: 'Architects Daughter, cursive', } }>
        E-Waste
      </h1> */}
      <h1 className=" font-serif text-3xl">{page}</h1>
    </div>
  );
};

export default Logo;
