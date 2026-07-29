import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudCcmTokenAuth } from "./ElasticCloudCcmTokenAuth";

/**
 * Authentication methods supported by the Elastic Cloud CCM interface. Exactly one is set, selected by its `type`.
 */
export type ElasticCloudCcmAuthentication =
  | ElasticCloudCcmTokenAuth
  | UnparsedObject;
