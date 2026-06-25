import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricVolumesRelationship } from "./MetricVolumesRelationship";

/**
 * Relationships for a metric.
 */
export class MetricRelationships {
  /**
   * Relationship to a metric volume included in the response.
   */
  "metricVolumes"?: MetricVolumesRelationship;
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
    metricVolumes: {
      baseName: "metric_volumes",
      type: "MetricVolumesRelationship",
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
    return MetricRelationships.attributeTypeMap;
  }

  public constructor() {}
}
