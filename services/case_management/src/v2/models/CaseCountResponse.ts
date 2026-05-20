import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseCountResponseData } from "./CaseCountResponseData";

/**
 * Response containing the total number of cases matching a query, optionally grouped by specified fields.
 */
export class CaseCountResponse {
  /**
   * Data object containing the count results, including per-field group breakdowns.
   */
  "data": CaseCountResponseData;
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
      type: "CaseCountResponseData",
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
    return CaseCountResponse.attributeTypeMap;
  }

  public constructor() {}
}
