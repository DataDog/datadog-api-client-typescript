/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The sort parameters when querying security findings.
 */

export type SecurityFindingsSort =
  | typeof DETECTION_CHANGED_AT_ASC
  | typeof DETECTION_CHANGED_AT_DESC
  | UnparsedObject;
export const DETECTION_CHANGED_AT_ASC = "@detection_changed_at";
export const DETECTION_CHANGED_AT_DESC = "-@detection_changed_at";
