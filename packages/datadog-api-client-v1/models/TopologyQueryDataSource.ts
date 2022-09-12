/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type TopologyQueryDataSource = typeof DATA_STREAMS | typeof SERVICE_MAP;
export const DATA_STREAMS = "data_streams";
export const SERVICE_MAP = "service_map";
