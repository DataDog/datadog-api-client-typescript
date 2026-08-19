/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the policy allows or denies matching actions.
 */

export type ExecutionPolicyEffect = typeof ALLOW | typeof DENY | UnparsedObject;
export const ALLOW = "allow";
export const DENY = "deny";
