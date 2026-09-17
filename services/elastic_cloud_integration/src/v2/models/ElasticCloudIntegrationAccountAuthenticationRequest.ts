import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountBasicAuthRequest } from "./ElasticCloudIntegrationAccountBasicAuthRequest";

/**
 * Authentication for creating the Elastic Cloud integration account. Exactly one method is set.
 */
export type ElasticCloudIntegrationAccountAuthenticationRequest =
  | ElasticCloudIntegrationAccountBasicAuthRequest
  | UnparsedObject;
