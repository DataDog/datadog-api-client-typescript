import { UnparsedObject } from "@datadog/datadog-api-client";

import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the Temporal Cloud OpenMetrics integration account. Exactly one method is set.
 */
export type TemporalCloudOpenMetricsIntegrationAccountAuthenticationRequest =
  | TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
