/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Org group memberships resource type.
 */

export type OrgGroupMembershipType =
  | typeof ORG_GROUP_MEMBERSHIPS
  | UnparsedObject;
export const ORG_GROUP_MEMBERSHIPS = "org_group_memberships";
