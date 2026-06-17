/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Current triage state of the indicator.
 */

export type IoCTriageState =
  | typeof NOT_REVIEWED
  | typeof REVIEWED
  | UnparsedObject;
export const NOT_REVIEWED = "not_reviewed";
export const REVIEWED = "reviewed";
