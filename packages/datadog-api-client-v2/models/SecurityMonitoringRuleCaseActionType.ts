/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The action type.
 */

export type SecurityMonitoringRuleCaseActionType =
  | typeof BLOCK_IP
  | typeof BLOCK_USER
  | UnparsedObject;
export const BLOCK_IP = "block_ip";
export const BLOCK_USER = "block_user";
