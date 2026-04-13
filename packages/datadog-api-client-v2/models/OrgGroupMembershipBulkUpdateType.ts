/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Org group membership bulk update resource type.
 */

export type OrgGroupMembershipBulkUpdateType =
  | typeof ORG_GROUP_MEMBERSHIP_BULK_UPDATES
  | UnparsedObject;
export const ORG_GROUP_MEMBERSHIP_BULK_UPDATES =
  "org_group_membership_bulk_updates";
