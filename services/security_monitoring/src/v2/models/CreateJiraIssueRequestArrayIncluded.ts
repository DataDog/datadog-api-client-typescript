import { UnparsedObject } from "@datadog/datadog-api-client";

import { CaseManagementProjectData } from "./CaseManagementProjectData";
import { CreateCaseRequestData } from "./CreateCaseRequestData";
import { FindingData } from "./FindingData";

/**
 * Attributes and relationships of the case linked to the Jira issue. Should contain all of the following: case, project, and security findings.
 */
export type CreateJiraIssueRequestArrayIncluded =
  | CreateCaseRequestData
  | CaseManagementProjectData
  | FindingData
  | UnparsedObject;
