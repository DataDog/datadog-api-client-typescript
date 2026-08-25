import { UnparsedObject } from "@datadog/datadog-api-client";

import { IntegrationAccountBasicAuthRequest } from "./IntegrationAccountBasicAuthRequest";

/**
 * Authentication for creating the Elastic Cloud integration account. Exactly one method is set.
 */
export type ElasticCloudIntegrationAccountAuthenticationRequest =
  | IntegrationAccountBasicAuthRequest
  | UnparsedObject;
