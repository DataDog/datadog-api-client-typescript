/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeIntegrationAccountPrivateKeyAuthRequest } from "./SnowflakeIntegrationAccountPrivateKeyAuthRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication for updating the Snowflake integration account. Exactly one method is set. An update replaces the authentication object entirely, so it requires the same fields as creating an account.
 */

export type SnowflakeIntegrationAccountAuthenticationUpdate =
  | SnowflakeIntegrationAccountPrivateKeyAuthRequest
  | UnparsedObject;
