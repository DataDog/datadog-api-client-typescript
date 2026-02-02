import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PolicyResultDataResponse } from "./PolicyResultDataResponse";

/**
 * Response for policy evaluation result.
 */
export class PolicyResultResponse {
  /**
   * Data envelope for policy result response.
   */
  "data": PolicyResultDataResponse;
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
      type: "PolicyResultDataResponse",
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
    return PolicyResultResponse.attributeTypeMap;
  }

  public constructor() {}
}
