/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Controls how dataset ownership is determined. `disabled` turns off ownership-based access
 * entirely. `team_tag_based` assigns dataset ownership based on the team tags applied to the
 * data, allowing team members to see their own team's datasets.
 */

export type DatasetRestrictionOwnershipMode =
  | typeof DISABLED
  | typeof TEAM_TAG_BASED
  | UnparsedObject;
export const DISABLED = "disabled";
export const TEAM_TAG_BASED = "team_tag_based";
