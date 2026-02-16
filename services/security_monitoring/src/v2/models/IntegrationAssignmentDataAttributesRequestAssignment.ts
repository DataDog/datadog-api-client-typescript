import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class IntegrationAssignmentDataAttributesRequestAssignment {
  /**
   * Map of Jira issue URLs to lists of finding IDs.
   */
  "jira": { [key: string]: Array<string> };
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
    jira: {
      baseName: "jira",
      type: "{ [key: string]: Array<string>; }",
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
    return IntegrationAssignmentDataAttributesRequestAssignment.attributeTypeMap;
  }

  public constructor() {}
}
