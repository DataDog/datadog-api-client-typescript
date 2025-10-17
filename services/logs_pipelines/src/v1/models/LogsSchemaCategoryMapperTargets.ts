import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Name of the target attributes which value is defined by the matching category.
 */
export class LogsSchemaCategoryMapperTargets {
  /**
   * ID of the field to map log attributes to.
   */
  "id"?: string;
  /**
   * Name of the field to map log attributes to.
   */
  "name"?: string;
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
    name: {
      baseName: "name",
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
    return LogsSchemaCategoryMapperTargets.attributeTypeMap;
  }

  public constructor() {}
}
