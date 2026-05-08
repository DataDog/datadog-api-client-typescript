import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplaySummaryDataResponse } from "./ReplaySummaryDataResponse";

/**
 * Response containing a generated RUM replay summary.
 */
export class ReplaySummaryResponse {
  /**
   * Data object for a RUM replay summary response.
   */
  "data": ReplaySummaryDataResponse;
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
      type: "ReplaySummaryDataResponse",
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
    return ReplaySummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
