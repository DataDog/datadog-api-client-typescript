/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateJiraIssueRequestDataRelationshipsCase } from "./CreateJiraIssueRequestDataRelationshipsCase";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the Jira issue to create.
 */
export class CreateJiraIssueRequestDataRelationships {
  /**
   * Case linked to the Jira issue.
   */
  "_case": CreateJiraIssueRequestDataRelationshipsCase;

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
    _case: {
      baseName: "case",
      type: "CreateJiraIssueRequestDataRelationshipsCase",
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
    return CreateJiraIssueRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
