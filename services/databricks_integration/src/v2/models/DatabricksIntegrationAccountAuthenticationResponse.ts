import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountOAuthAuthResponse } from "./DatabricksIntegrationAccountOAuthAuthResponse";
import { DatabricksIntegrationAccountPatAuthResponse } from "./DatabricksIntegrationAccountPatAuthResponse";
import { IntegrationAccountPrivateActionRunnerAuthResponse } from "./IntegrationAccountPrivateActionRunnerAuthResponse";

/**
 * Authentication configured on the Databricks integration account.
 */
export type DatabricksIntegrationAccountAuthenticationResponse =
  | DatabricksIntegrationAccountOAuthAuthResponse
  | IntegrationAccountPrivateActionRunnerAuthResponse
  | DatabricksIntegrationAccountPatAuthResponse
  | UnparsedObject;
