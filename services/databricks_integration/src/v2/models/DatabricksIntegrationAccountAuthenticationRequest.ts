import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountOAuthAuthRequest } from "./DatabricksIntegrationAccountOAuthAuthRequest";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthRequest } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthRequest";

/**
 * Authentication for creating the Databricks integration account. Exactly one method is set. Choosing `private_action_runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data. `bearer_token` is not available on creation: Databricks accepts it only on accounts that already use it, so it can only appear on read and update.
 */
export type DatabricksIntegrationAccountAuthenticationRequest =
  | DatabricksIntegrationAccountOAuthAuthRequest
  | DatabricksIntegrationAccountPrivateActionRunnerAuthRequest
  | UnparsedObject;
