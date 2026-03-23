import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A dependency relation describing which other components a given component depends on.
 */
export class ScaRequestDataAttributesRelationsItems {
  /**
   * The list of BOM references that this component directly depends on.
   */
  "dependsOn"?: Array<string>;
  /**
   * The BOM reference of the component that has dependencies.
   */
  "ref"?: string;
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
    dependsOn: {
      baseName: "depends_on",
      type: "Array<string>",
    },
    ref: {
      baseName: "ref",
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
    return ScaRequestDataAttributesRelationsItems.attributeTypeMap;
  }

  public constructor() {}
}
