/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Severity override resource type.
 */

export type SeverityOverrideDataType =
  | typeof SEVERITY_OVERRIDE
  | UnparsedObject;
export const SEVERITY_OVERRIDE = "severity_override";
