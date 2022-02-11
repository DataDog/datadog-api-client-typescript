import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiListSLOsRequest = {
  // string | A comma separated list of the IDs of the service level objectives objects. (optional)
  ids: "id1, id2, id3",
  // string | The query string to filter results based on SLO names. (optional)
  query: "monitor",
  // string | The query string to filter results based on a single SLO tag. (optional)
  tagsQuery: "env:prod",
  // string | The query string to filter results based on SLO numerator and denominator. (optional)
  metricsQuery: "aws.elb.request_count",
  // number | The number of SLOs to return in the response. (optional)
  limit: 1,
  // number | The specific offset to use as the beginning of the returned response. (optional)
  offset: 1,
};

apiInstance
  .listSLOs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
