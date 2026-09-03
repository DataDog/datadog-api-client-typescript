/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountOAuthAuthUpdate } from "./DatabricksIntegrationAccountOAuthAuthUpdate";
import { DatabricksIntegrationAccountPatAuthUpdate } from "./DatabricksIntegrationAccountPatAuthUpdate";
import { IntegrationAccountPrivateActionRunnerAuthRequest } from "./IntegrationAccountPrivateActionRunnerAuthRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication for updating the Databricks integration account. Exactly one method is set. Choosing `private-action-runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data. `pat` is accepted only on accounts that already use it, so it cannot move an account onto personal access token authentication.
 */

export type DatabricksIntegrationAccountAuthenticationUpdate =
  | DatabricksIntegrationAccountOAuthAuthUpdate
  | IntegrationAccountPrivateActionRunnerAuthRequest
  | DatabricksIntegrationAccountPatAuthUpdate
  | UnparsedObject;
