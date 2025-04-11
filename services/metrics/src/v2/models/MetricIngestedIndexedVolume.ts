import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricIngestedIndexedVolumeAttributes } from "./MetricIngestedIndexedVolumeAttributes";
import { MetricIngestedIndexedVolumeType } from "./MetricIngestedIndexedVolumeType";

/**
 * Object for a single metric's ingested and indexed volume.
 */
export class MetricIngestedIndexedVolume {
  /**
   * Object containing the definition of a metric's ingested and indexed volume.
   */
  "attributes"?: MetricIngestedIndexedVolumeAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric ingested and indexed volume type.
   */
  "type"?: MetricIngestedIndexedVolumeType;
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
      type: "MetricIngestedIndexedVolumeAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricIngestedIndexedVolumeType",
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
    return MetricIngestedIndexedVolume.attributeTypeMap;
  }

  public constructor() {}
}
