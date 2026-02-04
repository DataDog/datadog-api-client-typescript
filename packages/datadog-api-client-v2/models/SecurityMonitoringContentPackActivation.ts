/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The activation status of a content pack
 */

export type SecurityMonitoringContentPackActivation =
  | typeof NEVER_ACTIVATED
  | typeof ACTIVATED
  | typeof DEACTIVATED
  | UnparsedObject;
export const NEVER_ACTIVATED = "never_activated";
export const ACTIVATED = "activated";
export const DEACTIVATED = "deactivated";
