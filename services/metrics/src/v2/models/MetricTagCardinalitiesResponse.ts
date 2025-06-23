import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricTagCardinalitiesMeta } from "./MetricTagCardinalitiesMeta";
import { MetricTagCardinality } from "./MetricTagCardinality";

/**
 * Response object that includes an array of objects representing the cardinality details of a metric's tags.
 */
export class MetricTagCardinalitiesResponse {
  /**
   * A list of tag cardinalities associated with the given metric.
   */
  "data"?: Array<MetricTagCardinality>;
  /**
   * Response metadata object.
   */
  "meta"?: MetricTagCardinalitiesMeta;
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
      type: "Array<MetricTagCardinality>",
    },
    meta: {
      baseName: "meta",
      type: "MetricTagCardinalitiesMeta",
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
    return MetricTagCardinalitiesResponse.attributeTypeMap;
  }

  public constructor() {}
}
