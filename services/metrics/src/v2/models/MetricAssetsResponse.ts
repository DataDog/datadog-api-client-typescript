import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetResponseData } from "./MetricAssetResponseData";
import { MetricAssetResponseIncluded } from "./MetricAssetResponseIncluded";

/**
 * Response object that includes related dashboards, monitors, notebooks, and SLOs.
 */
export class MetricAssetsResponse {
  /**
   * Metric assets response data.
   */
  "data"?: MetricAssetResponseData;
  /**
   * Array of objects related to the metric assets.
   */
  "included"?: Array<MetricAssetResponseIncluded>;
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
      type: "MetricAssetResponseData",
    },
    included: {
      baseName: "included",
      type: "Array<MetricAssetResponseIncluded>",
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
    return MetricAssetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
