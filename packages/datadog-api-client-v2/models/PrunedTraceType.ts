/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the pruned trace resource. The value is always `pruned_trace`.
 */

export type PrunedTraceType = typeof PRUNED_TRACE | UnparsedObject;
export const PRUNED_TRACE = "pruned_trace";
