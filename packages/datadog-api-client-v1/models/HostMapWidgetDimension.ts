/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Visual dimension driven by a formula in the infrastructure host map widget.
 */

export type HostMapWidgetDimension =
  | typeof NODE
  | typeof FILL
  | typeof SIZE
  | UnparsedObject;
export const NODE = "node";
export const FILL = "fill";
export const SIZE = "size";
