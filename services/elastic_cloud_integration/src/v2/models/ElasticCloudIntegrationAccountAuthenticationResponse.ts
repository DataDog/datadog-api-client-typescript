import { UnparsedObject } from "@datadog/datadog-api-client";

import { IntegrationAccountBasicAuthResponse } from "./IntegrationAccountBasicAuthResponse";

/**
 * Authentication configured on the Elastic Cloud integration account.
 */
export type ElasticCloudIntegrationAccountAuthenticationResponse =
  | IntegrationAccountBasicAuthResponse
  | UnparsedObject;
