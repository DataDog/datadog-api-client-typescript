/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the policy suggestion.
 */

export type OrgGroupPolicySuggestionStatus =
  | typeof PENDING
  | typeof ACCEPTED
  | typeof DISMISSED
  | UnparsedObject;
export const PENDING = "pending";
export const ACCEPTED = "accepted";
export const DISMISSED = "dismissed";
