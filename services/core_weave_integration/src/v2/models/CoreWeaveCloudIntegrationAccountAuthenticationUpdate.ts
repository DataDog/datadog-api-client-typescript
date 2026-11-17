import { UnparsedObject } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate";

/**
 * Authentication for updating the CoreWeave integration account. Exactly one method is set.
 */
export type CoreWeaveCloudIntegrationAccountAuthenticationUpdate =
  | CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate
  | UnparsedObject;
