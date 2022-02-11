import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SnapshotsApi(configuration);

let params: v1.SnapshotsApiGetGraphSnapshotRequest = {
  // number | The POSIX timestamp of the start of the query.
  start: 1,
  // number | The POSIX timestamp of the end of the query.
  end: 1,
  // string | The metric query. (optional)
  metricQuery: "metric_query_example",
  // string | A query that adds event bands to the graph. (optional)
  eventQuery: "event_query_example",
  // string | A JSON document defining the graph. `graph_def` can be used instead of `metric_query`. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded. (optional)
  graphDef: "graph_def_example",
  // string | A title for the graph. If no title is specified, the graph does not have a title. (optional)
  title: "title_example",
};

apiInstance
  .getGraphSnapshot(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
