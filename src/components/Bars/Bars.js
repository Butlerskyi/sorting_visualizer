import React from "react";
import "./Bars.scss";

function ListBlocks({ blocks, compare, sorted, swap }) {
  return (
    <div className="listBlocks">
      {blocks.map((block, i) => {
        const height = block * 17;
        let bg = "skyblue";

        // element is being compared with the other element
        if (compare && (i === compare[0] || i === compare[1])) {
          bg = "white";
        }

        if (swap && (i === swap[0] || i === swap[1])) {
          bg = "red";
        }
        // element is in sorted position
        if (sorted && sorted.includes(i)) {
          bg = "#31ff00";
        }

        const style = {
          backgroundColor: bg,
          height: height,
        };
        return (
          <div key={i} className="block" style={style}>
            {block}
          </div>
        );
      })}
    </div>
  );
}

export default ListBlocks;
