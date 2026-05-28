/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Identifies this as an infrastructure-backed host map request.
 */

export type HostMapWidgetInfrastructureRequestRequestType =
  | typeof INFRASTRUCTURE_HOSTMAP
  | UnparsedObject;
export const INFRASTRUCTURE_HOSTMAP = "infrastructure_hostmap";
