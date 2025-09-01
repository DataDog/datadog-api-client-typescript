/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueAttributes } from "./IssueAttributes";
import { IssueRelationships } from "./IssueRelationships";
import { IssueType } from "./IssueType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The issue matching the request.
 */
export class Issue {
  /**
   * Object containing the information of an issue.
   */
  "attributes": IssueAttributes;
  /**
   * Issue identifier.
   */
  "id": string;
  /**
   * Relationship between the issue and an assignee, case and/or teams.
   */
  "relationships"?: IssueRelationships;
  /**
   * Type of the object.
   */
  "type": IssueType;

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
      type: "IssueAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IssueRelationships",
    },
    type: {
      baseName: "type",
      type: "IssueType",
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
    return Issue.attributeTypeMap;
  }

  public constructor() {}
}
