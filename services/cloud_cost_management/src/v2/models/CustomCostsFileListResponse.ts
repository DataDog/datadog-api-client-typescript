import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomCostListResponseMeta } from "./CustomCostListResponseMeta";
import { CustomCostsFileMetadataHighLevel } from "./CustomCostsFileMetadataHighLevel";

/**
 * Response for List Custom Costs files.
 */
export class CustomCostsFileListResponse {
  /**
   * List of Custom Costs files.
   */
  "data"?: Array<CustomCostsFileMetadataHighLevel>;
  /**
   * Meta for the response from the List Custom Costs endpoints.
   */
  "meta"?: CustomCostListResponseMeta;
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
      type: "Array<CustomCostsFileMetadataHighLevel>",
    },
    meta: {
      baseName: "meta",
      type: "CustomCostListResponseMeta",
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
    return CustomCostsFileListResponse.attributeTypeMap;
  }

  public constructor() {}
}
