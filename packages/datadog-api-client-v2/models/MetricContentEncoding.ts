/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type MetricContentEncoding = typeof DEFLATE | typeof ZSTD1 | typeof GZIP;
export const DEFLATE = "deflate";
export const ZSTD1 = "zstd1";
export const GZIP = "gzip";
