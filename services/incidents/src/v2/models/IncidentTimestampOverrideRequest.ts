import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampOverrideDataRequest } from "./IncidentTimestampOverrideDataRequest";

/**
 * Request payload for creating a timestamp override.
 */
export class IncidentTimestampOverrideRequest {
  /**
   * Timestamp override data in a create request.
   */
  "data": IncidentTimestampOverrideDataRequest;
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
      type: "IncidentTimestampOverrideDataRequest",
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
    return IncidentTimestampOverrideRequest.attributeTypeMap;
  }

  public constructor() {}
}
