import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the assignee request.
 */
export class AssigneeRequestDataAttributes {
  /**
   * Unique identifier of the Datadog user to assign the security findings to. If this field is not provided, the security findings are unassigned.
   */
  "assigneeId"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AssigneeRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
