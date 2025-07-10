import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The dependencies of a component of the SBOM.
 */
export class SBOMComponentDependency {
  /**
   * The components that are dependencies of the ref component.
   */
  "dependsOn"?: Array<string>;
  /**
   * The identifier for the related component.
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
      baseName: "dependsOn",
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
    return SBOMComponentDependency.attributeTypeMap;
  }

  public constructor() {}
}
