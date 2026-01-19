/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraIssueTemplateDataAttributes } from "./JiraIssueTemplateDataAttributes";
import { JiraIssueTemplateDataRelationships } from "./JiraIssueTemplateDataRelationships";
import { JiraIssueTemplateType } from "./JiraIssueTemplateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a Jira issue template
 */
export class JiraIssueTemplateData {
  /**
   * Attributes of a Jira issue template
   */
  "attributes": JiraIssueTemplateDataAttributes;
  /**
   * Unique identifier for the Jira issue template
   */
  "id": string;
  /**
   * Relationships of a Jira issue template
   */
  "relationships"?: JiraIssueTemplateDataRelationships;
  /**
   * Type identifier for Jira issue template resources
   */
  "type": JiraIssueTemplateType;

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
    attributes: {
      baseName: "attributes",
      type: "JiraIssueTemplateDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "JiraIssueTemplateDataRelationships",
    },
    type: {
      baseName: "type",
      type: "JiraIssueTemplateType",
      required: true,
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
    return JiraIssueTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
