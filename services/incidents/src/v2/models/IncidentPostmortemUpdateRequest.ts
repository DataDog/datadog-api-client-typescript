import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPostmortemUpdateData } from "./IncidentPostmortemUpdateData";

/**
 * Request to update the postmortem attached to an incident.
 */
export class IncidentPostmortemUpdateRequest {
  /**
   * The postmortem resource for an update request.
   */
  "data": IncidentPostmortemUpdateData;
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
      type: "IncidentPostmortemUpdateData",
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
    return IncidentPostmortemUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
