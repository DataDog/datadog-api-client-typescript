import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountBasicAuthUpdate } from "./ElasticCloudIntegrationAccountBasicAuthUpdate";

/**
 * Authentication for updating the Elastic Cloud integration account. Exactly one method is set.
 */
export type ElasticCloudIntegrationAccountAuthenticationUpdate =
  | ElasticCloudIntegrationAccountBasicAuthUpdate
  | UnparsedObject;
