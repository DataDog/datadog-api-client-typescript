import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SloReportCreateRequestData } from "./SloReportCreateRequestData";

/**
 * The SLO report request body.
 */
export class SloReportCreateRequest {
  /**
   * The data portion of the SLO report request.
   */
  "data": SloReportCreateRequestData;
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
      type: "SloReportCreateRequestData",
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
    return SloReportCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
