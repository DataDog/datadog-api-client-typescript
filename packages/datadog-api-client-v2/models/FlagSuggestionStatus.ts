/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of a flag suggestion.
 */

export type FlagSuggestionStatus =
  | typeof PENDING
  | typeof REJECTED
  | typeof APPROVED
  | UnparsedObject;
export const PENDING = "pending";
export const REJECTED = "rejected";
export const APPROVED = "approved";
