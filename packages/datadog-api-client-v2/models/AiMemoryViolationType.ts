/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of AI memory violation result indicating whether it is a true positive or false positive.
 */

export type AiMemoryViolationType = typeof TP | typeof FP | UnparsedObject;
export const TP = "TP";
export const FP = "FP";
