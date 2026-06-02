import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssigneeDataType } from "./AssigneeDataType";
import { AssigneeResponseDataAttributes } from "./AssigneeResponseDataAttributes";

/**
 * Data of the assignee response.
 */
export class AssigneeResponseData {
  /**
   * Attributes of the assignee response.
   */
  "attributes": AssigneeResponseDataAttributes;
  /**
   * Unique identifier of the assignee request.
   */
  "id": string;
  /**
   * Assignee resource type.
   */
  "type": AssigneeDataType;
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
      type: "AssigneeResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AssigneeDataType",
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
    return AssigneeResponseData.attributeTypeMap;
  }

  public constructor() {}
}
