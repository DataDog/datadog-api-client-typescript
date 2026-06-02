import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssigneeRequestData } from "./AssigneeRequestData";

/**
 * Request to assign or unassign security findings.
 */
export class AssigneeRequest {
  /**
   * Data of the assignee request.
   */
  "data": AssigneeRequestData;
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
      type: "AssigneeRequestData",
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
    return AssigneeRequest.attributeTypeMap;
  }

  public constructor() {}
}
