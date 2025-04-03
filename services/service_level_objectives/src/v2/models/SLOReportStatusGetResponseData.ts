import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOReportStatusGetResponseAttributes } from "./SLOReportStatusGetResponseAttributes";

/**
 * The data portion of the SLO report status response.
 */
export class SLOReportStatusGetResponseData {
  /**
   * The attributes portion of the SLO report status response.
   */
  "attributes"?: SLOReportStatusGetResponseAttributes;
  /**
   * The ID of the report job.
   */
  "id"?: string;
  /**
   * The type of ID.
   */
  "type"?: string;
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
      type: "SLOReportStatusGetResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SLOReportStatusGetResponseData.attributeTypeMap;
  }

  public constructor() {}
}
