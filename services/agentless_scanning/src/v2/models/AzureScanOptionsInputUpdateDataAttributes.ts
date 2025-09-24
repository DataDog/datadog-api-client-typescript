import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `AzureScanOptionsInputUpdateDataAttributes` object.
 */
export class AzureScanOptionsInputUpdateDataAttributes {
  /**
   * The `attributes` `vuln_containers_os`.
   */
  "vulnContainersOs"?: boolean;
  /**
   * The `attributes` `vuln_host_os`.
   */
  "vulnHostOs"?: boolean;
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
    vulnContainersOs: {
      baseName: "vuln_containers_os",
      type: "boolean",
    },
    vulnHostOs: {
      baseName: "vuln_host_os",
      type: "boolean",
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
    return AzureScanOptionsInputUpdateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
