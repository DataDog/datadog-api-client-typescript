/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether Datadog serves the holdout. Datadog serves MANAGED holdouts. EXTERNAL holdouts record what your own feature flagging system holds back, and Datadog does not serve them.
 */

export type ExperimentsExperimentHoldoutV2DTODataAttributesKind =
  | typeof MANAGED
  | typeof EXTERNAL
  | typeof UNKNOWN
  | UnparsedObject;
export const MANAGED = "MANAGED";
export const EXTERNAL = "EXTERNAL";
export const UNKNOWN = "UNKNOWN";
