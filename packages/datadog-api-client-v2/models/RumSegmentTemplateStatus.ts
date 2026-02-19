/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of a segment template.
 */

export type RumSegmentTemplateStatus =
  | typeof ACTIVE
  | typeof DEPRECATED
  | typeof ARCHIVED
  | UnparsedObject;
export const ACTIVE = "active";
export const DEPRECATED = "deprecated";
export const ARCHIVED = "archived";
