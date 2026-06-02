import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityEntityRiskScore } from "./SecurityEntityRiskScore";

/**
 * Response containing a single entity risk score
 */
export class SecurityEntityRiskScoreResponse {
  /**
   * An entity risk score containing security risk assessment information
   */
  "data": SecurityEntityRiskScore;
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
      type: "SecurityEntityRiskScore",
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
    return SecurityEntityRiskScoreResponse.attributeTypeMap;
  }

  public constructor() {}
}
