import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetSuppressionVersionHistoryData } from "./GetSuppressionVersionHistoryData";

/**
 * Response for getting the suppression version history.
 */
export class GetSuppressionVersionHistoryResponse {
  /**
   * Data for the suppression version history.
   */
  "data"?: GetSuppressionVersionHistoryData;
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
      type: "GetSuppressionVersionHistoryData",
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
    return GetSuppressionVersionHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
