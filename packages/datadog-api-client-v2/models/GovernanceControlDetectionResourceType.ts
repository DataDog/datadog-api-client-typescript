/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Governance control detection resource type.
 */

export type GovernanceControlDetectionResourceType =
  | typeof GOVERNANCE_CONTROL_DETECTION
  | UnparsedObject;
export const GOVERNANCE_CONTROL_DETECTION = "governance_control_detection";
