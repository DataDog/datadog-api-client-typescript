/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Upsert arbitrary rule resource type.
 */

export type ArbitraryCostUpsertRequestDataType =
  | typeof UPSERT_ARBITRARY_RULE
  | UnparsedObject;
export const UPSERT_ARBITRARY_RULE = "upsert_arbitrary_rule";
