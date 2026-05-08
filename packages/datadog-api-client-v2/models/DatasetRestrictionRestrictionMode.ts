/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Controls the default data visibility for the product type. `standard` makes data visible
 * to all users with appropriate product access. `default_hide` hides data by default and
 * requires explicit grants for each dataset.
 */

export type DatasetRestrictionRestrictionMode =
  | typeof STANDARD
  | typeof DEFAULT_HIDE
  | UnparsedObject;
export const STANDARD = "standard";
export const DEFAULT_HIDE = "default_hide";
