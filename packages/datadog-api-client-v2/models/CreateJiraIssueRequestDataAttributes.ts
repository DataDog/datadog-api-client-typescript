/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CasePriority } from "./CasePriority";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the Jira issue to create.
 */
export class CreateJiraIssueRequestDataAttributes {
  /**
   * Unique identifier of the user assigned to the Jira issue.
   */
  "assigneeId"?: string;
  /**
   * Description of the Jira issue. If not provided, the description will be automatically generated.
   */
  "description"?: string;
  /**
   * Custom fields of the Jira issue to create. For the list of available fields, see [Jira documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-rest-api-2-issue-createmeta-projectidorkey-issuetypes-issuetypeid-get).
   */
  "fields"?: { [key: string]: any };
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Title of the Jira issue. If not provided, the title will be automatically generated.
   */
  "title"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    assigneeId: {
      baseName: "assignee_id",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: any; }",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateJiraIssueRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
