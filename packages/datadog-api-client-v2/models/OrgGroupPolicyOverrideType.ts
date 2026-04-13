/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Org group policy overrides resource type.
 */

export type OrgGroupPolicyOverrideType =
  | typeof ORG_GROUP_POLICY_OVERRIDES
  | UnparsedObject;
export const ORG_GROUP_POLICY_OVERRIDES = "org_group_policy_overrides";
