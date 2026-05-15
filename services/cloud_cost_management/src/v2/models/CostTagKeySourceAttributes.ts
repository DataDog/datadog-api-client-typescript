import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a Cloud Cost Management tag source.
 */
export class CostTagKeySourceAttributes {
  /**
   * The tag key name.
   */
  "tagKey": string;
  /**
   * Origins where this tag key was observed (for example, `aws-user-defined`).
   */
  "tagSources": Array<string>;
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
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    tagSources: {
      baseName: "tag_sources",
      type: "Array<string>",
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
    return CostTagKeySourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
