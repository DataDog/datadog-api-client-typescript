import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetMonitorRelationship } from "./MetricAssetMonitorRelationship";

/**
 * A object containing the list of monitors that can be referenced in the `included` data.
 */
export class MetricAssetMonitorRelationships {
  /**
   * A list of monitors that can be referenced in the `included` data.
   */
  "data"?: Array<MetricAssetMonitorRelationship>;
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
      type: "Array<MetricAssetMonitorRelationship>",
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
    return MetricAssetMonitorRelationships.attributeTypeMap;
  }

  public constructor() {}
}
