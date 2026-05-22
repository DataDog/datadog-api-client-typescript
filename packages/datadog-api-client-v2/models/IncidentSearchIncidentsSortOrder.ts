/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The ways searched incidents can be sorted.
 */

export type IncidentSearchIncidentsSortOrder =
  | typeof CREATED_ASCENDING
  | typeof CREATED_DESCENDING
  | typeof MODIFIED_ASCENDING
  | typeof MODIFIED_DESCENDING
  | UnparsedObject;
export const CREATED_ASCENDING = "created";
export const CREATED_DESCENDING = "-created";
export const MODIFIED_ASCENDING = "modified";
export const MODIFIED_DESCENDING = "-modified";
