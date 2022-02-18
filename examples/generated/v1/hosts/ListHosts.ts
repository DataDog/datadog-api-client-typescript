import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params: v1.HostsApiListHostsRequest = {
  // string | String to filter search results. (optional)
  filter: "filter_example",
  // string | Sort hosts by this field. (optional)
  sortField: "sort_field_example",
  // string | Direction of sort. Options include `asc` and `desc`. (optional)
  sortDir: "sort_dir_example",
  // number | Host result to start search from. (optional)
  start: 1,
  // number | Number of hosts to return. Max 1000. (optional)
  count: 1,
  // number | Number of seconds since UNIX epoch from which you want to search your hosts. (optional)
  from: 1,
  // boolean | Include information on the muted status of hosts and when the mute expires. (optional)
  includeMutedHostsData: true,
  // boolean | Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.). (optional)
  includeHostsMetadata: true,
};

apiInstance
  .listHosts(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
