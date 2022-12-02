/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Layout type of the dashboard.
 */

export type DashboardLayoutType = typeof ORDERED | typeof FREE;
export const ORDERED = "ordered";
export const FREE = "free";
