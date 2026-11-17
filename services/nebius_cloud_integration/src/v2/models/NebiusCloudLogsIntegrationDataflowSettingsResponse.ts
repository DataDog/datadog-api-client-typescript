import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the logs dataflow.
 */
export class NebiusCloudLogsIntegrationDataflowSettingsResponse {
  /**
   * Nebius log integrations collected, such as `nebius-cloud-compute` and `default`. Absent when no service is enabled.
   */
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
    return NebiusCloudLogsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
