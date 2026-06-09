import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatusPageNoticeUpdateData } from "./IncidentStatusPageNoticeUpdateData";

/**
 * Request to update a status page notice.
 */
export class IncidentStatusPageNoticeUpdateRequest {
  /**
   * Data for updating a status page notice.
   */
  "data": IncidentStatusPageNoticeUpdateData;
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
      type: "IncidentStatusPageNoticeUpdateData",
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
    return IncidentStatusPageNoticeUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
