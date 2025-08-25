/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Unit for quota enforcement in bytes for data size or events for count.
 */

export type ObservabilityPipelineQuotaProcessorLimitEnforceType =
  | typeof BYTES
  | typeof EVENTS
  | UnparsedObject;
export const BYTES = "bytes";
export const EVENTS = "events";
