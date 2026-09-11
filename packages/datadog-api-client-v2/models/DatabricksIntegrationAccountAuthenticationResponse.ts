/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountOAuthAuthResponse } from "./DatabricksIntegrationAccountOAuthAuthResponse";
import { DatabricksIntegrationAccountPatAuthResponse } from "./DatabricksIntegrationAccountPatAuthResponse";
import { IntegrationAccountPrivateActionRunnerAuthResponse } from "./IntegrationAccountPrivateActionRunnerAuthResponse";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication configured on the Databricks integration account.
 */

export type DatabricksIntegrationAccountAuthenticationResponse =
  | DatabricksIntegrationAccountOAuthAuthResponse
  | IntegrationAccountPrivateActionRunnerAuthResponse
  | DatabricksIntegrationAccountPatAuthResponse
  | UnparsedObject;
