/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The state of the credentials configured on the entity context sync.
 */

export type SecurityMonitoringIntegrationConfigState =
  | typeof VALID
  | typeof INVALID
  | typeof INITIALIZING
  | UnparsedObject;
export const VALID = "valid";
export const INVALID = "invalid";
export const INITIALIZING = "initializing";
