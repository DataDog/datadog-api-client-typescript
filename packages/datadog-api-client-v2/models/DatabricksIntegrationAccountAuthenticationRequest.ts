/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountOAuthAuthRequest } from "./DatabricksIntegrationAccountOAuthAuthRequest";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthRequest } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication for creating the Databricks integration account. Exactly one method is set. Choosing `private_action_runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data. `bearer_token` is not available on creation: Databricks accepts it only on accounts that already use it, so it can only appear on read and update.
 */

export type DatabricksIntegrationAccountAuthenticationRequest =
  | DatabricksIntegrationAccountOAuthAuthRequest
  | DatabricksIntegrationAccountPrivateActionRunnerAuthRequest
  | UnparsedObject;
