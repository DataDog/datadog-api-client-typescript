import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampOverrideDataResponse } from "./IncidentTimestampOverrideDataResponse";
import { IncidentUserData } from "./IncidentUserData";

/**
 * Response with a single timestamp override.
 */
export class IncidentTimestampOverrideResponse {
  /**
   * Timestamp override data in a response.
   */
  "data": IncidentTimestampOverrideDataResponse;
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
      type: "IncidentTimestampOverrideDataResponse",
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
    return IncidentTimestampOverrideResponse.attributeTypeMap;
  }

  public constructor() {}
}
