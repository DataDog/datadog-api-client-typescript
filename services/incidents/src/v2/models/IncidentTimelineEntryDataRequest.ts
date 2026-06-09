import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimelineEntryDataAttributesRequest } from "./IncidentTimelineEntryDataAttributesRequest";
import { IncidentTimelineEntryType } from "./IncidentTimelineEntryType";

/**
 * Timeline entry data for a request.
 */
export class IncidentTimelineEntryDataRequest {
  /**
   * Attributes for creating or updating a timeline entry.
   */
  "attributes": IncidentTimelineEntryDataAttributesRequest;
  /**
   * Incident timeline entry resource type.
   */
  "type": IncidentTimelineEntryType;
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
      type: "IncidentTimelineEntryDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentTimelineEntryType",
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
    return IncidentTimelineEntryDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
