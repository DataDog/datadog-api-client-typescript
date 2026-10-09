/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridSortByLabel } from "./HeatgridSortByLabel";
import { HeatgridSortByValue } from "./HeatgridSortByValue";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sort rows by aggregated value or group label.
 */

export type HeatgridSortBy =
  | HeatgridSortByValue
  | HeatgridSortByLabel
  | UnparsedObject;
