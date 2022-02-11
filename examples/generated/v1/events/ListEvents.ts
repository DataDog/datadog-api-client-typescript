import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params:v1.EventsApiListEventsRequest = {
  // number | POSIX timestamp.
  start: 1,
  // number | POSIX timestamp.
  end: 1,
  // EventPriority | Priority of your events, either `low` or `normal`. (optional)
  priority: "normal",
  // string | A comma separated string of sources. (optional)
  sources: "sources_example",
  // string | A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. (optional)
  tags: "host:host0",
  // boolean | Set unaggregated to `true` to return all events within the specified [`start`,`end`] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won't be available in the output. Aggregated events with `is_aggregate=true` in the response will still be returned unless exclude_aggregate is set to `true.` (optional)
  unaggregated: true,
  // boolean | Set `exclude_aggregate` to `true` to only return unaggregated events where `is_aggregate=false` in the response. If the `exclude_aggregate` parameter is set to `true`, then the unaggregated parameter is ignored and will be `true` by default. (optional)
  excludeAggregate: true,
  // number | By default 1000 results are returned per request. Set page to the number of the page to return with `0` being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to `true.` (optional)
  page: 1,
};

apiInstance.listEvents(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
