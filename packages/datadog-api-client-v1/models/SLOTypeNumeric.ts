/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * A numeric representation of the type of the service level objective (`0` for
 * monitor, `1` for metric). Always included in service level objective responses.
 * Ignored in create/update requests.
 */

export type SLOTypeNumeric = typeof MONITOR | typeof METRIC | UnparsedObject;
export const MONITOR = 0;
export const METRIC = 1;
