import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountBasicAuthResponse } from "./ElasticCloudIntegrationAccountBasicAuthResponse";

/**
 * Authentication configured on the Elastic Cloud integration account.
 */
export type ElasticCloudIntegrationAccountAuthenticationResponse =
  | ElasticCloudIntegrationAccountBasicAuthResponse
  | UnparsedObject;
