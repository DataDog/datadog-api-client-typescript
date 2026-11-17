import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the Temporal Cloud OpenMetrics integration account. Exactly one method is set.
 */
export type TemporalCloudOpenMetricsIntegrationAccountAuthenticationUpdate =
  | TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
