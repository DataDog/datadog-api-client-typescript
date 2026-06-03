import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LicensesListResponseData } from "./LicensesListResponseData";

/**
 * The top-level response object returned by the licenses list endpoint, containing the array of supported SPDX licenses.
 */
export class LicensesListResponse {
  /**
   * The data object in a licenses list response, containing the list of SPDX licenses.
   */
  "data": LicensesListResponseData;
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
      type: "LicensesListResponseData",
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
    return LicensesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
