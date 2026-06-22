/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The kind of ECS workload that owns the problematic tasks.
 */

export type RemediationWorkloadType =
  | typeof WORKLOAD_TYPE_UNSPECIFIED
  | typeof SERVICE
  | typeof STANDALONE_TASK
  | typeof DAEMON
  | UnparsedObject;
export const WORKLOAD_TYPE_UNSPECIFIED = "WORKLOAD_TYPE_UNSPECIFIED";
export const SERVICE = "SERVICE";
export const STANDALONE_TASK = "STANDALONE_TASK";
export const DAEMON = "DAEMON";
