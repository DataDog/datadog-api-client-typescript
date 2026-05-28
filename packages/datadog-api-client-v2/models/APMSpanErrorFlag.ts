/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Error flag for a span. `1` when the span is in error, `0` otherwise.
 */

export type APMSpanErrorFlag = typeof NO_ERROR | typeof ERROR | UnparsedObject;
export const NO_ERROR = 0;
export const ERROR = 1;
