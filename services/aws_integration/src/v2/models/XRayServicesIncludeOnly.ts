import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Include only these services. Defaults to `[]`.
 */
export class XRayServicesIncludeOnly {
  /**
   * Include only these services.
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return XRayServicesIncludeOnly.attributeTypeMap;
  }

  public constructor() {}
}
