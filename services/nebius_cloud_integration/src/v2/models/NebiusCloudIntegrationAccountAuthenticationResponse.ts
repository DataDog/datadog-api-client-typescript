import { UnparsedObject } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountServiceAccountAuthResponse } from "./NebiusCloudIntegrationAccountServiceAccountAuthResponse";

/**
 * Authentication configured on the Nebius Cloud integration account.
 */
export type NebiusCloudIntegrationAccountAuthenticationResponse =
  | NebiusCloudIntegrationAccountServiceAccountAuthResponse
  | UnparsedObject;
