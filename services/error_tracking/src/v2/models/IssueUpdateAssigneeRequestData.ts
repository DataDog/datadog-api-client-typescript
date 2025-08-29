import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueUpdateAssigneeRequestDataType } from "./IssueUpdateAssigneeRequestDataType";

/**
 * Update issue assignee request.
 */
export class IssueUpdateAssigneeRequestData {
  /**
   * User identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueUpdateAssigneeRequestDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueUpdateAssigneeRequestDataType",
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
    return IssueUpdateAssigneeRequestData.attributeTypeMap;
  }

  public constructor() {}
}
