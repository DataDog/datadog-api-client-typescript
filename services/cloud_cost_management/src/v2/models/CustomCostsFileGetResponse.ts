import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomCostGetResponseMeta } from "./CustomCostGetResponseMeta";
import { CustomCostsFileMetadataWithContentHighLevel } from "./CustomCostsFileMetadataWithContentHighLevel";

/**
 * Response for Get Custom Costs files.
 */
export class CustomCostsFileGetResponse {
  /**
   * JSON API format of for a Custom Costs file with content.
   */
  "data"?: CustomCostsFileMetadataWithContentHighLevel;
  /**
   * Meta for the response from the Get Custom Costs endpoints.
   */
  "meta"?: CustomCostGetResponseMeta;
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
      type: "CustomCostsFileMetadataWithContentHighLevel",
    },
    meta: {
      baseName: "meta",
      type: "CustomCostGetResponseMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomCostsFileGetResponse.attributeTypeMap;
  }

  public constructor() {}
}
