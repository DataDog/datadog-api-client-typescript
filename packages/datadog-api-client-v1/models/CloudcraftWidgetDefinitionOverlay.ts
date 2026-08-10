/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Overlay applied on top of the Cloudcraft topology.
 */

export type CloudcraftWidgetDefinitionOverlay =
  | typeof OBSERVABILITY
  | typeof CLOUD_COST
  | typeof SECURITY
  | typeof NDM_REACHABILITY
  | typeof MONITORS
  | typeof APM
  | typeof DEFAULT
  | UnparsedObject;
export const OBSERVABILITY = "Observability";
export const CLOUD_COST = "CloudCost";
export const SECURITY = "Security";
export const NDM_REACHABILITY = "NDMReachability";
export const MONITORS = "Monitors";
export const APM = "APM";
export const DEFAULT = "Default";
