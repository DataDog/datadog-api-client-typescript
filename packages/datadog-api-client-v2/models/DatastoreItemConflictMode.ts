/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How to handle conflicts when inserting items that already exist in the datastore.
 */

export type DatastoreItemConflictMode =
  | typeof FAIL_ON_CONFLICT
  | typeof OVERWRITE_ON_CONFLICT
  | UnparsedObject;
export const FAIL_ON_CONFLICT = "fail_on_conflict";
export const OVERWRITE_ON_CONFLICT = "overwrite_on_conflict";
