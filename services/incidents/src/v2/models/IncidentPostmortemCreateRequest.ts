import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPostmortemCreateData } from "./IncidentPostmortemCreateData";

/**
 * Request to create a postmortem for an incident.
 */
export class IncidentPostmortemCreateRequest {
  /**
   * The postmortem resource for a creation request.
   */
  "data": IncidentPostmortemCreateData;
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
      type: "IncidentPostmortemCreateData",
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
    return IncidentPostmortemCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
