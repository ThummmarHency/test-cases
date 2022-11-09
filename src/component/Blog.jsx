import React, { useState } from "react";

const Blog = () => {
  const [temp, setTemp] = useState({});
  console.log('temp :>> ', temp);
  return (
    <div className="mainCls">
      <ul>
        <li>React</li>
        <li key="Node" className="liCls">Node</li>
        <li className="liCls">Angular</li>
      </ul>
      <div className="number">
        <span>one</span>
        <span>two</span>
      </div>
      <div>
        <button className="my-button disable btn-primary">Submit</button>
      </div>
      <div className="some-class">Test</div>
    </div>
  );
};

export default Blog;
