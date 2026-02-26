/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Entity schema version for conversion.
 */

export type EntitySchemaVersion =
  | typeof V2
  | typeof V2_1
  | typeof V2_2
  | typeof V3
  | UnparsedObject;
export const V2 = "v2";
export const V2_1 = "v2.1";
export const V2_2 = "v2.2";
export const V3 = "v3";
