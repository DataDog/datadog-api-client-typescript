import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetClustersResponseData } from "./FleetClustersResponseData";
import { FleetClustersResponseMeta } from "./FleetClustersResponseMeta";

/**
 * Response containing a paginated list of fleet clusters.
 */
export class FleetClustersResponse {
  /**
   * The response data containing status and clusters array.
   */
  "data": FleetClustersResponseData;
  /**
   * Metadata for the list of clusters response.
   */
  "meta"?: FleetClustersResponseMeta;
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
      type: "FleetClustersResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetClustersResponseMeta",
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
    return FleetClustersResponse.attributeTypeMap;
  }

  public constructor() {}
}
