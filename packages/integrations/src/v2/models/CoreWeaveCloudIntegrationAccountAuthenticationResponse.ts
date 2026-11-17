import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthResponse } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthResponse";

/**
 * Authentication configured on the CoreWeave integration account.
 */
export type CoreWeaveCloudIntegrationAccountAuthenticationResponse =
  | CoreWeaveCloudIntegrationAccountAPITokenAuthResponse
  | UnparsedObject;
