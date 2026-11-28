/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type MessageDisplay =
  | typeof INLINE
  | typeof EXPANDED_MD
  | typeof EXPANDED_LG
  | UnparsedObject;
export const INLINE = "inline";
export const EXPANDED_MD = "expanded-md";
export const EXPANDED_LG = "expanded-lg";
