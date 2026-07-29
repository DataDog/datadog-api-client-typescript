import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalMetricsConfigurationAttributes } from "./HistoricalMetricsConfigurationAttributes";
import { HistoricalMetricsConfigurationType } from "./HistoricalMetricsConfigurationType";

/**
 * A historical metrics configuration resource object. Existence of this resource means historical metrics ingestion is enabled for the metric; there is no separate enabled attribute.
 */
export class HistoricalMetricsConfigurationData {
  /**
   * Attributes of a historical metrics configuration.
   */
  "attributes"?: HistoricalMetricsConfigurationAttributes;
  /**
   * The metric name, used as the resource ID.
   */
  "id"?: string;
  /**
   * The historical metrics configuration resource type.
   */
  "type"?: HistoricalMetricsConfigurationType;
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
    attributes: {
      baseName: "attributes",
      type: "HistoricalMetricsConfigurationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "HistoricalMetricsConfigurationType",
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
    return HistoricalMetricsConfigurationData.attributeTypeMap;
  }

  public constructor() {}
}
