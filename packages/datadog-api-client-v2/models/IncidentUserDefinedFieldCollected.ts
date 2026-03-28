/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The lifecycle stage at which the app prompts users to fill out this field. Cannot be set on required fields.
 */

export type IncidentUserDefinedFieldCollected =
  | typeof ACTIVE
  | typeof STABLE
  | typeof RESOLVED
  | typeof COMPLETED
  | UnparsedObject;
export const ACTIVE = "active";
export const STABLE = "stable";
export const RESOLVED = "resolved";
export const COMPLETED = "completed";
