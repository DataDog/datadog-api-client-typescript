/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Column to sort segments by.
 */

export type SegmentSortColumn =
  | typeof NAME
  | typeof DESCRIPTION
  | typeof CREATED_BY
  | typeof CREATED_AT
  | typeof MODIFIED_BY
  | typeof MODIFIED_AT
  | typeof DISABLED_BY
  | typeof DISABLED_AT
  | typeof UUID
  | UnparsedObject;
export const NAME = "name";
export const DESCRIPTION = "description";
export const CREATED_BY = "created_by";
export const CREATED_AT = "created_at";
export const MODIFIED_BY = "modified_by";
export const MODIFIED_AT = "modified_at";
export const DISABLED_BY = "disabled_by";
export const DISABLED_AT = "disabled_at";
export const UUID = "uuid";
