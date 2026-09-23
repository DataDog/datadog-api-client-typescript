import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountBearerTokenAuthResponse } from "./DatabricksIntegrationAccountBearerTokenAuthResponse";
import { DatabricksIntegrationAccountOAuthAuthResponse } from "./DatabricksIntegrationAccountOAuthAuthResponse";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthResponse } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthResponse";

/**
 * Authentication configured on the Databricks integration account. A `bearer_token` method indicates an account still on token authentication, which Databricks accepts only on accounts that already use it.
 */
export type DatabricksIntegrationAccountAuthenticationResponse =
  | DatabricksIntegrationAccountOAuthAuthResponse
  | DatabricksIntegrationAccountPrivateActionRunnerAuthResponse
  | DatabricksIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
