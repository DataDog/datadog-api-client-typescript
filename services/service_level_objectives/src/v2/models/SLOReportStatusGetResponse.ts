import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOReportStatusGetResponseData } from "./SLOReportStatusGetResponseData";

/**
 * The SLO report status response.
 */
export class SLOReportStatusGetResponse {
  /**
   * The data portion of the SLO report status response.
   */
  "data"?: SLOReportStatusGetResponseData;
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
      type: "SLOReportStatusGetResponseData",
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
    return SLOReportStatusGetResponse.attributeTypeMap;
  }

  public constructor() {}
}
