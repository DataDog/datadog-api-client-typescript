import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthRequest } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthRequest";

/**
 * Authentication for creating the CoreWeave integration account. Exactly one method is set.
 */
export type CoreWeaveCloudIntegrationAccountAuthenticationRequest =
  | CoreWeaveCloudIntegrationAccountAPITokenAuthRequest
  | UnparsedObject;
