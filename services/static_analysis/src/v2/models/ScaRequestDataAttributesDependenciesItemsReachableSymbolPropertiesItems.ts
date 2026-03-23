import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A key-value property describing a reachable symbol within a dependency.
 */
export class ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems {
  /**
   * The name of the reachable symbol property.
   */
  "name"?: string;
  /**
   * The value of the reachable symbol property.
   */
  "value"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems.attributeTypeMap;
  }

  public constructor() {}
}
