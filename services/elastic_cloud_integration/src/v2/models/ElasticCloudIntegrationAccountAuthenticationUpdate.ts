import { UnparsedObject } from "@datadog/datadog-api-client";

import { IntegrationAccountBasicAuthUpdate } from "./IntegrationAccountBasicAuthUpdate";

/**
 * Authentication for updating the Elastic Cloud integration account. Exactly one method is set.
 */
export type ElasticCloudIntegrationAccountAuthenticationUpdate =
  | IntegrationAccountBasicAuthUpdate
  | UnparsedObject;
