import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountOAuthAuthRequest } from "./DatabricksIntegrationAccountOAuthAuthRequest";
import { IntegrationAccountPrivateActionRunnerAuthRequest } from "./IntegrationAccountPrivateActionRunnerAuthRequest";

/**
 * Authentication for creating the Databricks integration account. Exactly one method is set. Choosing `private-action-runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data.
 */
export type DatabricksIntegrationAccountAuthenticationRequest =
  | DatabricksIntegrationAccountOAuthAuthRequest
  | IntegrationAccountPrivateActionRunnerAuthRequest
  | UnparsedObject;
