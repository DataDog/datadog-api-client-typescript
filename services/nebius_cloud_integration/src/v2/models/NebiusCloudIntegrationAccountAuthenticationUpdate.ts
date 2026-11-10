import { UnparsedObject } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountServiceAccountAuthUpdate } from "./NebiusCloudIntegrationAccountServiceAccountAuthUpdate";

/**
 * Authentication for updating the Nebius Cloud integration account. Exactly one method is set.
 */
export type NebiusCloudIntegrationAccountAuthenticationUpdate =
  | NebiusCloudIntegrationAccountServiceAccountAuthUpdate
  | UnparsedObject;
