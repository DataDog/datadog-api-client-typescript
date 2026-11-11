/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How Datadog serves a MANAGED holdout. GLOBAL holdouts apply to every eligible experiment of a subject type. SELECTIVE holdouts apply only to the experiments attached to them. Null for EXTERNAL holdouts.
 */

export type ExperimentsExperimentHoldoutV2DTODataAttributesHoldoutType =
  | typeof GLOBAL
  | typeof SELECTIVE
  | typeof UNKNOWN
  | UnparsedObject;
export const GLOBAL = "GLOBAL";
export const SELECTIVE = "SELECTIVE";
export const UNKNOWN = "UNKNOWN";
