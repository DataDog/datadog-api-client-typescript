import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityEntityRiskScore } from "./SecurityEntityRiskScore";
import { SecurityEntityRiskScoresMeta } from "./SecurityEntityRiskScoresMeta";

/**
 * Response containing a list of entity risk scores
 */
export class SecurityEntityRiskScoresResponse {
  "data": Array<SecurityEntityRiskScore>;
  /**
   * Metadata for pagination
   */
  "meta": SecurityEntityRiskScoresMeta;
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
      type: "Array<SecurityEntityRiskScore>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityEntityRiskScoresMeta",
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
    return SecurityEntityRiskScoresResponse.attributeTypeMap;
  }

  public constructor() {}
}
