import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomCostsFileMetadataHighLevel } from "./CustomCostsFileMetadataHighLevel";
import { CustomCostUploadResponseMeta } from "./CustomCostUploadResponseMeta";

/**
 * Response for Uploaded Custom Costs files.
 */
export class CustomCostsFileUploadResponse {
  /**
   * JSON API format for a Custom Costs file.
   */
  "data"?: CustomCostsFileMetadataHighLevel;
  /**
   * Meta for the response from the Upload Custom Costs endpoints.
   */
  "meta"?: CustomCostUploadResponseMeta;
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
      type: "CustomCostsFileMetadataHighLevel",
    },
    meta: {
      baseName: "meta",
      type: "CustomCostUploadResponseMeta",
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
    return CustomCostsFileUploadResponse.attributeTypeMap;
  }

  public constructor() {}
}
