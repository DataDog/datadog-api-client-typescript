import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricIngestedIndexedVolumeType } from "./MetricIngestedIndexedVolumeType";

/**
 * Relationship data for a metric's ingested and indexed volumes.
 */
export class MetricVolumesRelationshipData {
  /**
   * The metric name for this resource.
   */
  "id": string;
  /**
   * The metric ingested and indexed volume type.
   */
  "type": MetricIngestedIndexedVolumeType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricIngestedIndexedVolumeType",
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
    return MetricVolumesRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
