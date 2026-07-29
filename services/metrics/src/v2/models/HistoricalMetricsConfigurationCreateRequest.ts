import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalMetricsConfigurationCreateData } from "./HistoricalMetricsConfigurationCreateData";

/**
 * Request body for enabling historical metrics ingestion for a metric.
 */
export class HistoricalMetricsConfigurationCreateRequest {
  /**
   * Data object for enabling historical metrics ingestion for a metric.
   */
  "data": HistoricalMetricsConfigurationCreateData;
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
      type: "HistoricalMetricsConfigurationCreateData",
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
    return HistoricalMetricsConfigurationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
