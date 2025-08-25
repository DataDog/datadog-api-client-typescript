/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Case field that can be sorted on
 */

export type CaseSortableField =
  | typeof CREATED_AT
  | typeof PRIORITY
  | typeof STATUS
  | UnparsedObject;
export const CREATED_AT = "created_at";
export const PRIORITY = "priority";
export const STATUS = "status";
