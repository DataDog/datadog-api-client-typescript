import { UnparsedObject } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountServiceAccountAuthRequest } from "./NebiusCloudIntegrationAccountServiceAccountAuthRequest";

/**
 * Authentication for creating the Nebius Cloud integration account. Exactly one method is set.
 */
export type NebiusCloudIntegrationAccountAuthenticationRequest =
  | NebiusCloudIntegrationAccountServiceAccountAuthRequest
  | UnparsedObject;
