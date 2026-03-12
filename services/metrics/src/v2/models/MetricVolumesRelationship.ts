import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricVolumesRelationshipData } from "./MetricVolumesRelationshipData";

/**
 * Relationship to a metric's ingested and indexed volumes.
 */
export class MetricVolumesRelationship {
  /**
   * Relationship data for a metric's ingested and indexed volumes.
   */
  "data"?: MetricVolumesRelationshipData;
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
      type: "MetricVolumesRelationshipData",
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
    return MetricVolumesRelationship.attributeTypeMap;
  }

  public constructor() {}
}
