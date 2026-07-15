/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Org group policy suggestions resource type.
 */

export type OrgGroupPolicySuggestionType =
  | typeof ORG_GROUP_POLICY_SUGGESTIONS
  | UnparsedObject;
export const ORG_GROUP_POLICY_SUGGESTIONS = "org_group_policy_suggestions";
