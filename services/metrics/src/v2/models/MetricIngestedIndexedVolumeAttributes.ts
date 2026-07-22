import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Object containing the definition of a metric's ingested and indexed volume.
 */
export class MetricIngestedIndexedVolumeAttributes {
  /**
   * Estimated average hourly number of indexed time series for the given metric over the last hour. For organizations on Metric Name Pricing, this represents the estimated sum of indexed data points over the last hour.
   */
  "indexedVolume"?: number;
  /**
   * Estimated average hourly number of ingested time series for the given metric over the last hour. This value is `0` for metrics not configured with Metrics Without Limits. For organizations on Metric Name Pricing, this represents the estimated sum of ingested data points over the last hour.
   */
  "ingestedVolume"?: number;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    indexedVolume: {
      baseName: "indexed_volume",
      type: "number",
      format: "int64",
    },
    ingestedVolume: {
      baseName: "ingested_volume",
      type: "number",
      format: "int64",
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
    return MetricIngestedIndexedVolumeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
