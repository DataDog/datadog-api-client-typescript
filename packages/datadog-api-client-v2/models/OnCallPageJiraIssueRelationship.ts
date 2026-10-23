/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageJiraIssueRelationshipData } from "./OnCallPageJiraIssueRelationshipData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Jira issue linked to the page.
 */
export class OnCallPageJiraIssueRelationship {
  /**
   * Reference to a Jira issue.
   */
  "data"?: OnCallPageJiraIssueRelationshipData;

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
    data: {
      baseName: "data",
      type: "OnCallPageJiraIssueRelationshipData",
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
    return OnCallPageJiraIssueRelationship.attributeTypeMap;
  }

  public constructor() {}
}
