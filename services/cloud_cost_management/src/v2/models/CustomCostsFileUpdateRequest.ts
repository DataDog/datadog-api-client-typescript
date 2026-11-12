import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomCostsFileUpdateData } from "./CustomCostsFileUpdateData";

/**
 * Request for updating a Custom Costs file.
 */
export class CustomCostsFileUpdateRequest {
  /**
   * Custom Costs file to update.
   */
  "data": CustomCostsFileUpdateData;
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
      type: "CustomCostsFileUpdateData",
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
    return CustomCostsFileUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
