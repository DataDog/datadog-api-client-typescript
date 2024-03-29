/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of retention filter. The value should always be spans-sampling-processor.
 */

export type RetentionFilterType =
  | typeof SPANS_SAMPLING_PROCESSOR
  | UnparsedObject;
export const SPANS_SAMPLING_PROCESSOR = "spans-sampling-processor";
