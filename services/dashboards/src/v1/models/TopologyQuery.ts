import { UnparsedObject } from "@datadog/datadog-api-client";

import { TopologyQueryDataStreamsOrServiceMap } from "./TopologyQueryDataStreamsOrServiceMap";

/**
 * A topology data source query.
 */
export type TopologyQuery =
  | TopologyQueryDataStreamsOrServiceMap
  | UnparsedObject;
