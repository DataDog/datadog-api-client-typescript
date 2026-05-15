/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Visual size for a `header` block.
 */

export type LLMObsContentBlockHeaderLevel =
  | typeof SM
  | typeof MD
  | typeof LG
  | typeof XL
  | UnparsedObject;
export const SM = "sm";
export const MD = "md";
export const LG = "lg";
export const XL = "xl";
