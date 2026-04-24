import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Data for the test relationship.
 */
export class SyntheticsTestResultRelationshipTestData {
  /**
   * The public ID of the test.
   */
  "id"?: string;
  /**
   * Type of the related resource.
   */
  "type"?: string;
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
    },
    type: {
      baseName: "type",
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
    return SyntheticsTestResultRelationshipTestData.attributeTypeMap;
  }

  public constructor() {}
}
