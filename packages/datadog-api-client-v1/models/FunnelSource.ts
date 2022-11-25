/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Source from which to query items to display in the funnel.
 */

export type FunnelSource = typeof RUM;
export const RUM = "rum";
