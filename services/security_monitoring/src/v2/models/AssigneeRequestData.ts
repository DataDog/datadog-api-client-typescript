import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssigneeDataType } from "./AssigneeDataType";
import { AssigneeRequestDataAttributes } from "./AssigneeRequestDataAttributes";
import { AssigneeRequestDataRelationships } from "./AssigneeRequestDataRelationships";

/**
 * Data of the assignee request.
 */
export class AssigneeRequestData {
  /**
   * Attributes of the assignee request.
   */
  "attributes"?: AssigneeRequestDataAttributes;
  /**
   * Unique identifier of the assignee request.
   */
  "id"?: string;
  /**
   * Relationships of the assignee request.
   */
  "relationships": AssigneeRequestDataRelationships;
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
      type: "AssigneeRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "AssigneeRequestDataRelationships",
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
    return AssigneeRequestData.attributeTypeMap;
  }

  public constructor() {}
}
