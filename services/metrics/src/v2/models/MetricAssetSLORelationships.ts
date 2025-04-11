import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetSLORelationship } from "./MetricAssetSLORelationship";

/**
 * An object containing a list of SLOs that can be referenced in the `included` data.
 */
export class MetricAssetSLORelationships {
  /**
   * A list of SLOs that can be referenced in the `included` data.
   */
  "data"?: Array<MetricAssetSLORelationship>;
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
      type: "Array<MetricAssetSLORelationship>",
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
    return MetricAssetSLORelationships.attributeTypeMap;
  }

  public constructor() {}
}
