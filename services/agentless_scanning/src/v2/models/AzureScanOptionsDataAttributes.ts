import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for Azure scan options configuration.
 */
export class AzureScanOptionsDataAttributes {
  /**
   * Indicates if scanning for vulnerabilities in containers is enabled.
   */
  "vulnContainersOs"?: boolean;
  /**
   * Indicates if scanning for vulnerabilities in hosts is enabled.
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
    return AzureScanOptionsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
