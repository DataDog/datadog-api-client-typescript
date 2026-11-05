/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * State of the investigation: `investigating` while it runs, `completed` after it has a result, or `failed`
 * when it produced no result before its timeout.
 */

export type SecurityAgentInvestigationState =
  | typeof INVESTIGATING
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const INVESTIGATING = "investigating";
export const COMPLETED = "completed";
export const FAILED = "failed";
