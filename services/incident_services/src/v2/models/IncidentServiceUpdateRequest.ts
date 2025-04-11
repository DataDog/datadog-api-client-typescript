import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentServiceUpdateData } from "./IncidentServiceUpdateData";

/**
 * Update request with an incident service payload.
 */
export class IncidentServiceUpdateRequest {
  /**
   * Incident Service payload for update requests.
   */
  "data": IncidentServiceUpdateData;
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
      type: "IncidentServiceUpdateData",
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
    return IncidentServiceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
