/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The ways searched incidents can be sorted.
 */

export type IncidentSearchSortOrder =
  | typeof CREATED_ASCENDING
  | typeof CREATED_DESCENDING
  | UnparsedObject;
export const CREATED_ASCENDING = "created";
export const CREATED_DESCENDING = "-created";
