import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a publish request.
 */
export class CreatePublishRequestRequestDataAttributes {
  /**
   * An optional description of the changes in this publish request.
   */
  "description"?: string;
  /**
   * A short title for the publish request.
   */
  "title": string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    title: {
      baseName: "title",
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
    return CreatePublishRequestRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
