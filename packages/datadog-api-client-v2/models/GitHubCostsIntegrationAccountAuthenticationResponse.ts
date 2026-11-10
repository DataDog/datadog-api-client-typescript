/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCostsIntegrationAccountBearerTokenAuthResponse } from "./GitHubCostsIntegrationAccountBearerTokenAuthResponse";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication configured on the GitHub Costs integration account.
 */

export type GitHubCostsIntegrationAccountAuthenticationResponse =
  | GitHubCostsIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
