/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The layout of components on the status page. Defaults to `list`. `grid` requires `visualization_type` to be `component_name_only`; changing `visualization_type` to any other value resets the layout to `list`.
 */

export type CreateStatusPageRequestDataAttributesVisualizationLayout =
  | typeof LIST
  | typeof GRID
  | UnparsedObject;
export const LIST = "list";
export const GRID = "grid";
