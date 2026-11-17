import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the Temporal Cloud OpenMetrics integration account.
 */
export type TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse =
  | TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
