import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimelineEntryDataResponse } from "./IncidentTimelineEntryDataResponse";

/**
 * Response with a single timeline entry.
 */
export class IncidentTimelineEntryResponse {
  /**
   * Timeline entry data in a response.
   */
  "data": IncidentTimelineEntryDataResponse;
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
      type: "IncidentTimelineEntryDataResponse",
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
    return IncidentTimelineEntryResponse.attributeTypeMap;
  }

  public constructor() {}
}
