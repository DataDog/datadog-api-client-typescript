/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The priority of the event's monitor. For example, `normal` or `low`.
 */

export type EventPriority = typeof NORMAL | typeof LOW;
export const NORMAL = "normal";
export const LOW = "low";
