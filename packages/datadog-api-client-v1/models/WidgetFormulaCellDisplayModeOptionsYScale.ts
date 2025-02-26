/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Y scale for the cell display mode options.
 */

export type WidgetFormulaCellDisplayModeOptionsYScale =
  | typeof SHARED
  | typeof INDEPENDENT
  | UnparsedObject;
export const SHARED = "shared";
export const INDEPENDENT = "independent";
