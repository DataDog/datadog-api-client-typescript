import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountOAuthAuthUpdate } from "./DatabricksIntegrationAccountOAuthAuthUpdate";
import { DatabricksIntegrationAccountPatAuthUpdate } from "./DatabricksIntegrationAccountPatAuthUpdate";
import { IntegrationAccountPrivateActionRunnerAuthRequest } from "./IntegrationAccountPrivateActionRunnerAuthRequest";

/**
 * Authentication for updating the Databricks integration account. Exactly one method is set. Choosing `private-action-runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data. `pat` is accepted only on accounts that already use it, so it cannot move an account onto personal access token authentication.
 */
export type DatabricksIntegrationAccountAuthenticationUpdate =
  | DatabricksIntegrationAccountOAuthAuthUpdate
  | IntegrationAccountPrivateActionRunnerAuthRequest
  | DatabricksIntegrationAccountPatAuthUpdate
  | UnparsedObject;
