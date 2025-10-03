/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The field type for reference table schema fields.
 */

export type ReferenceTableSchemaFieldType =
  | typeof STRING
  | typeof INT32
  | UnparsedObject;
export const STRING = "STRING";
export const INT32 = "INT32";
