/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountBearerTokenAuthUpdate } from "./DatabricksIntegrationAccountBearerTokenAuthUpdate";
import { DatabricksIntegrationAccountOAuthAuthUpdate } from "./DatabricksIntegrationAccountOAuthAuthUpdate";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication for updating the Databricks integration account. Exactly one method is set. Choosing `private_action_runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data. `bearer_token` is deprecated on Databricks: it is accepted only on accounts that already use it and never on creation, so it cannot move an account onto token authentication. Migrate those accounts to `databricks_oauth` or `private_action_runner`.
 */

export type DatabricksIntegrationAccountAuthenticationUpdate =
  | DatabricksIntegrationAccountOAuthAuthUpdate
  | DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate
  | DatabricksIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
