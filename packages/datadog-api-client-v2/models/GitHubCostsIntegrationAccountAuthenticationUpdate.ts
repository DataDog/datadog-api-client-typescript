/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCostsIntegrationAccountBearerTokenAuthUpdate } from "./GitHubCostsIntegrationAccountBearerTokenAuthUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication for updating the GitHub Costs integration account. Exactly one method is set.
 */

export type GitHubCostsIntegrationAccountAuthenticationUpdate =
  | GitHubCostsIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
