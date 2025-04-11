import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Case assign attributes
 */
export class CaseAssignAttributes {
  /**
   * Assignee's UUID
   */
  "assigneeId": string;
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
    return CaseAssignAttributes.attributeTypeMap;
  }

  public constructor() {}
}
