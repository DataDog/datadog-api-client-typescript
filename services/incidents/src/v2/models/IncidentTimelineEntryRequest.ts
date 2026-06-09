import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimelineEntryDataRequest } from "./IncidentTimelineEntryDataRequest";

/**
 * Request to create or update a timeline entry.
 */
export class IncidentTimelineEntryRequest {
  /**
   * Timeline entry data for a request.
   */
  "data": IncidentTimelineEntryDataRequest;
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
      type: "IncidentTimelineEntryDataRequest",
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
    return IncidentTimelineEntryRequest.attributeTypeMap;
  }

  public constructor() {}
}
