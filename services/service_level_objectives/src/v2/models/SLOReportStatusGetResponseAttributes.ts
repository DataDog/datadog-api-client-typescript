import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOReportStatus } from "./SLOReportStatus";

/**
 * The attributes portion of the SLO report status response.
 */
export class SLOReportStatusGetResponseAttributes {
  /**
   * The status of the SLO report job.
   */
  "status"?: SLOReportStatus;
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
    status: {
      baseName: "status",
      type: "SLOReportStatus",
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
    return SLOReportStatusGetResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
