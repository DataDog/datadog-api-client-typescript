import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudBasicAuth } from "./ElasticCloudBasicAuth";

/**
 * Authentication methods supported by the Elastic Cloud monitoring interface. Exactly one is set, selected by its `type`.
 */
export type ElasticCloudAuthentication = ElasticCloudBasicAuth | UnparsedObject;
