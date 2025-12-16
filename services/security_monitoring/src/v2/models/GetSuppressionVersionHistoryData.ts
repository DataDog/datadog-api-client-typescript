import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetSuppressionVersionHistoryDataType } from "./GetSuppressionVersionHistoryDataType";
import { SuppressionVersionHistory } from "./SuppressionVersionHistory";

/**
 * Data for the suppression version history.
 */
export class GetSuppressionVersionHistoryData {
  /**
   * Response object containing the version history of a suppression.
   */
  "attributes"?: SuppressionVersionHistory;
  /**
   * ID of the suppression.
   */
  "id"?: string;
  /**
   * Type of data.
   */
  "type"?: GetSuppressionVersionHistoryDataType;
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
    attributes: {
      baseName: "attributes",
      type: "SuppressionVersionHistory",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetSuppressionVersionHistoryDataType",
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
    return GetSuppressionVersionHistoryData.attributeTypeMap;
  }

  public constructor() {}
}
