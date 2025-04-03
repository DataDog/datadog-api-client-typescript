import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the AWS scan options to update.
 */
export class AwsScanOptionsUpdateAttributes {
  /**
   * Indicates if scanning of Lambda functions is enabled.
   */
  "lambda"?: boolean;
  /**
   * Indicates if scanning for sensitive data is enabled.
   */
  "sensitiveData"?: boolean;
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
    lambda: {
      baseName: "lambda",
      type: "boolean",
    },
    sensitiveData: {
      baseName: "sensitive_data",
      type: "boolean",
    },
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsScanOptionsUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
