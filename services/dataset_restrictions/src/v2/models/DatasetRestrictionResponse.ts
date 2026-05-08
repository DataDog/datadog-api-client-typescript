import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetRestrictionResponseData } from "./DatasetRestrictionResponseData";

/**
 * Response containing the updated dataset restriction.
 */
export class DatasetRestrictionResponse {
  /**
   * A single dataset restriction configuration for one product type.
   */
  "data": DatasetRestrictionResponseData;
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
      type: "DatasetRestrictionResponseData",
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
    return DatasetRestrictionResponse.attributeTypeMap;
  }

  public constructor() {}
}
