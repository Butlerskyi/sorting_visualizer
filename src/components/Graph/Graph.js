import { ResponsiveLine } from "@nivo/line";
import "./graph.scss";

const Graph = ({ data }) => {
  return (
    <div className="graph">
      <ResponsiveLine
        data={[
          {
            id: "graph",
            color: "hsl(197, 71.4%, 72.3%)",
            data: data.map((item, index) => {
              return { x: index, y: item };
            }),
          },
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        pointSize={15}
        pointBorderWidth={7}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={3}
        colors={{ scheme: "paired" }}
        enablePointLabel={true}
      />
    </div>
  );
};

export default Graph;
