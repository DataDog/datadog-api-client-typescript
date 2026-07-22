/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Governance console config resource type.
 */

export type GovernanceConsoleConfigResourceType =
  | typeof GOVERNANCE_CONSOLE_CONFIG
  | UnparsedObject;
export const GOVERNANCE_CONSOLE_CONFIG = "governance_console_config";
