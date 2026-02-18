import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataExportConfig } from "./DataExportConfig";

/**
 * AWS CCM Config response attributes.
 */
export class AWSCcmConfigResponseAttributes {
  /**
   * List of data export configurations for Cost and Usage Reports.
   */
  "dataExportConfigs"?: Array<DataExportConfig>;
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
    dataExportConfigs: {
      baseName: "data_export_configs",
      type: "Array<DataExportConfig>",
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
    return AWSCcmConfigResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
