/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The kind of grouping to use.
 */

export type WidgetGrouping = typeof CHECK | typeof CLUSTER;
export const CHECK = "check";
export const CLUSTER = "cluster";
