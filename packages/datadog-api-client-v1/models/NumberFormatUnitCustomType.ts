/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of custom unit.
 */

export type NumberFormatUnitCustomType =
  | typeof CUSTOM_UNIT_LABEL
  | UnparsedObject;
export const CUSTOM_UNIT_LABEL = "custom_unit_label";
