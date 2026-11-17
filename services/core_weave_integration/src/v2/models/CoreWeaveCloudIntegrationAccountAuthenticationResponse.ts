import { UnparsedObject } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthResponse } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthResponse";

/**
 * Authentication configured on the CoreWeave integration account.
 */
export type CoreWeaveCloudIntegrationAccountAuthenticationResponse =
  | CoreWeaveCloudIntegrationAccountAPITokenAuthResponse
  | UnparsedObject;
