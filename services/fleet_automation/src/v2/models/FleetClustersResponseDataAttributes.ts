import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetClusterAttributes } from "./FleetClusterAttributes";

/**
 * Attributes of the fleet clusters response containing the list of clusters.
 */
export class FleetClustersResponseDataAttributes {
  /**
   * Array of clusters matching the query criteria.
   */
  "clusters"?: Array<FleetClusterAttributes>;
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
    clusters: {
      baseName: "clusters",
      type: "Array<FleetClusterAttributes>",
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
    return FleetClustersResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
