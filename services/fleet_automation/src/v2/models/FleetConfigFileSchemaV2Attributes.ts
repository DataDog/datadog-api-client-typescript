import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a configuration file's schema.
 */
export class FleetConfigFileSchemaV2Attributes {
  /**
   * The schema for the requested configuration file.
   */
  "schema": any;
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
    schema: {
      baseName: "schema",
      type: "any",
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
    return FleetConfigFileSchemaV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
