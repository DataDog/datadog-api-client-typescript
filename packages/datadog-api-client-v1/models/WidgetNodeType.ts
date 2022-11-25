/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Which type of node to use in the map.
 */

export type WidgetNodeType = typeof HOST | typeof CONTAINER;
export const HOST = "host";
export const CONTAINER = "container";
