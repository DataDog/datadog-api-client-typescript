/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Type of the configuration variable.
 */

export type SyntheticsConfigVariableType = typeof GLOBAL | typeof TEXT;
export const GLOBAL = "global";
export const TEXT = "text";
