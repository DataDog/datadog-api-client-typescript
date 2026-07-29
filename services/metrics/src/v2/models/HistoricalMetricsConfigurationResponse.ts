import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalMetricsConfigurationData } from "./HistoricalMetricsConfigurationData";

/**
 * Response containing a historical metrics configuration.
 */
export class HistoricalMetricsConfigurationResponse {
  /**
   * A historical metrics configuration resource object. Existence of this resource means historical metrics ingestion is enabled for the metric; there is no separate enabled attribute.
   */
  "data"?: HistoricalMetricsConfigurationData;
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
    data: {
      baseName: "data",
      type: "HistoricalMetricsConfigurationData",
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
    return HistoricalMetricsConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
