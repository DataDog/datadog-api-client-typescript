import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the assignee response.
 */
export class AssigneeResponseDataAttributes {
  /**
   * Unique identifier of the Datadog user assigned to the security findings. Omitted when the findings were unassigned.
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
    return AssigneeResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
