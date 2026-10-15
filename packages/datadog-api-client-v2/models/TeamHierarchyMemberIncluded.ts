/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyMemberTeam } from "./TeamHierarchyMemberTeam";
import { TeamHierarchyMemberUser } from "./TeamHierarchyMemberUser";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An included user or the requested team, distinguished by resource type.
 */

export type TeamHierarchyMemberIncluded =
  | TeamHierarchyMemberUser
  | TeamHierarchyMemberTeam
  | UnparsedObject;
