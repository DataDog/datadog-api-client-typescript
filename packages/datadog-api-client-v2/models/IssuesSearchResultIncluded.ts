/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Case } from "./Case";
import { Issue } from "./Issue";
import { IssueTeam } from "./IssueTeam";
import { IssueUser } from "./IssueUser";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An array of related resources, returned when the `include` query parameter is used.
 */

export type IssuesSearchResultIncluded =
  | Issue
  | Case
  | IssueUser
  | IssueTeam
  | UnparsedObject;
