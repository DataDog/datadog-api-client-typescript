import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalJobResponseData } from "./HistoricalJobResponseData";

/**
 * Historical job response.
 */
export class HistoricalJobResponse {
  /**
   * Historical job response data.
   */
  "data"?: HistoricalJobResponseData;
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
      type: "HistoricalJobResponseData",
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
    return HistoricalJobResponse.attributeTypeMap;
  }

  public constructor() {}
}
