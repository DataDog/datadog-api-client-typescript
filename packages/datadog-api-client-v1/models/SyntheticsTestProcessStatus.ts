/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Status of a Synthetic test.
 */

export type SyntheticsTestProcessStatus =
  | typeof NOT_SCHEDULED
  | typeof SCHEDULED
  | typeof FINISHED
  | typeof FINISHED_WITH_ERROR
  | UnparsedObject;
export const NOT_SCHEDULED = "not_scheduled";
export const SCHEDULED = "scheduled";
export const FINISHED = "finished";
export const FINISHED_WITH_ERROR = "finished_with_error";
