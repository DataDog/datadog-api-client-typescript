/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Can be set to `uuid` to automatically generate primary keys when new items are added. Default value is `none`, which requires you to supply a primary key for each new item.
 */

export type DatastorePrimaryKeyGenerationStrategy =
  | typeof NONE
  | typeof UUID
  | UnparsedObject;
export const NONE = "none";
export const UUID = "uuid";
