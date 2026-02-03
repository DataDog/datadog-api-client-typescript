import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class TenancyConfigDataAttributesLogsConfig {
  "compartmentTagFilters"?: Array<string>;
  "enabled"?: boolean;
  "enabledServices"?: Array<string>;
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
    compartmentTagFilters: {
      baseName: "compartment_tag_filters",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    enabledServices: {
      baseName: "enabled_services",
      type: "Array<string>",
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
    return TenancyConfigDataAttributesLogsConfig.attributeTypeMap;
  }

  public constructor() {}
}
