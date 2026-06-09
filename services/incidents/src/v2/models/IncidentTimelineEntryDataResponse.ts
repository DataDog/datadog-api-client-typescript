import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimelineEntryDataAttributesResponse } from "./IncidentTimelineEntryDataAttributesResponse";
import { IncidentTimelineEntryType } from "./IncidentTimelineEntryType";

/**
 * Timeline entry data in a response.
 */
export class IncidentTimelineEntryDataResponse {
  /**
   * Attributes of a timeline entry.
   */
  "attributes": IncidentTimelineEntryDataAttributesResponse;
  /**
   * The timeline entry identifier.
   */
  "id": string;
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
      type: "IncidentTimelineEntryDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentTimelineEntryDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
