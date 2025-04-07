import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `EntityV3APISpecInterfaceDefinition` object.
 */
export class EntityV3APISpecInterfaceDefinition {
  /**
   * The API definition.
   */
  "definition"?: any;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    definition: {
      baseName: "definition",
      type: "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3APISpecInterfaceDefinition.attributeTypeMap;
  }

  public constructor() {}
}
