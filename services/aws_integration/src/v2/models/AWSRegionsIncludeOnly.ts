import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Include only these regions.
 */
export class AWSRegionsIncludeOnly {
  /**
   * Include only these regions.
   */
  "includeOnly": Array<string>;
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
    includeOnly: {
      baseName: "include_only",
      type: "Array<string>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSRegionsIncludeOnly.attributeTypeMap;
  }

  public constructor() {}
}
