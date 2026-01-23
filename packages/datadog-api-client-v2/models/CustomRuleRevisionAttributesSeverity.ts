/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Rule severity
 */

export type CustomRuleRevisionAttributesSeverity =
  | typeof ERROR
  | typeof WARNING
  | typeof NOTICE
  | UnparsedObject;
export const ERROR = "ERROR";
export const WARNING = "WARNING";
export const NOTICE = "NOTICE";
