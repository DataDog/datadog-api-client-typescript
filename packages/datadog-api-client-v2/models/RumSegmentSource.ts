/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source of a segment.
 */

export type RumSegmentSource =
  | typeof USER_CREATED
  | typeof INITIAL
  | UnparsedObject;
export const USER_CREATED = "user_created";
export const INITIAL = "initial";
