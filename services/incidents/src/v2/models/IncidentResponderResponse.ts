import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderDataResponse } from "./IncidentResponderDataResponse";
import { IncidentUserData } from "./IncidentUserData";

/**
 * Response with a single incident responder.
 */
export class IncidentResponderResponse {
  /**
   * Incident responder data in a response.
   */
  "data": IncidentResponderDataResponse;
  /**
   * Included related resources.
   */
  "included"?: Array<IncidentUserData>;
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
      type: "IncidentResponderDataResponse",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentUserData>",
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
    return IncidentResponderResponse.attributeTypeMap;
  }

  public constructor() {}
}
