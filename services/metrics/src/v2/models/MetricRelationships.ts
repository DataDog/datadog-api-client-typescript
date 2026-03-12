import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricVolumesRelationship } from "./MetricVolumesRelationship";

/**
 * Relationships to related metric objects.
 */
export class MetricRelationships {
  /**
   * Relationship to a metric's ingested and indexed volumes.
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
