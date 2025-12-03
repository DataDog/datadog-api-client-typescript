/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseManagementProjectData } from "./CaseManagementProjectData";
import { CreateCaseRequestData } from "./CreateCaseRequestData";
import { FindingData } from "./FindingData";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Attributes and relationships of the case linked to the Jira issue. Should contain all of the following: case, project, and security findings.
 */

export type CreateJiraIssueRequestArrayIncluded =
  | CreateCaseRequestData
  | CaseManagementProjectData
  | FindingData
  | UnparsedObject;
