import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate";

/**
 * Authentication for updating the CoreWeave integration account. Exactly one method is set.
 */
export type CoreWeaveCloudIntegrationAccountAuthenticationUpdate =
  | CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate
  | UnparsedObject;
