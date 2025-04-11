import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SloReportCreateRequestAttributes } from "./SloReportCreateRequestAttributes";

/**
 * The data portion of the SLO report request.
 */
export class SloReportCreateRequestData {
  /**
   * The attributes portion of the SLO report request.
   */
  "attributes": SloReportCreateRequestAttributes;
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
      type: "SloReportCreateRequestAttributes",
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
    return SloReportCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
