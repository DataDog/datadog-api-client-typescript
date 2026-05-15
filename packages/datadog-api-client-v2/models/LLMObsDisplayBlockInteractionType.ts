/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type discriminator for a `display_block` interaction.
 */

export type LLMObsDisplayBlockInteractionType =
  | typeof DISPLAY_BLOCK
  | UnparsedObject;
export const DISPLAY_BLOCK = "display_block";
