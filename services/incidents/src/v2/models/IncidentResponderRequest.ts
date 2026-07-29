import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderDataRequest } from "./IncidentResponderDataRequest";

/**
 * Request payload for creating an incident responder.
 */
export class IncidentResponderRequest {
  /**
   * Incident responder data in a create request.
   */
  "data": IncidentResponderDataRequest;
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
      type: "IncidentResponderDataRequest",
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
    return IncidentResponderRequest.attributeTypeMap;
  }

  public constructor() {}
}
