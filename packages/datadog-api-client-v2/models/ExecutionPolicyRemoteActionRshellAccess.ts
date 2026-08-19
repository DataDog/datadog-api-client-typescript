/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The level of remote shell access granted for the target paths.
 */

export type ExecutionPolicyRemoteActionRshellAccess =
  | typeof READ_ONLY
  | typeof READ_WRITE
  | UnparsedObject;
export const READ_ONLY = "read_only";
export const READ_WRITE = "read_write";
