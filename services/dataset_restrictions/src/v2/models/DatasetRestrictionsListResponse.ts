import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetRestrictionResponseData } from "./DatasetRestrictionResponseData";

/**
 * Response containing the list of all dataset restriction configurations for the
 * organization, one per product type.
 */
export class DatasetRestrictionsListResponse {
  /**
   * An array of dataset restriction objects, one for each configured product type.
   */
  "data": Array<DatasetRestrictionResponseData>;
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
      type: "Array<DatasetRestrictionResponseData>",
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
    return DatasetRestrictionsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
