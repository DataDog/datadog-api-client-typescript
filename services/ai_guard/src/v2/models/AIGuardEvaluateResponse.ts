import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardEvaluateDataResponse } from "./AIGuardEvaluateDataResponse";

/**
 * The response containing the evaluation result.
 */
export class AIGuardEvaluateResponse {
  /**
   * The JSON:API evaluation resource.
   */
  "data": AIGuardEvaluateDataResponse;
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
      type: "AIGuardEvaluateDataResponse",
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
    return AIGuardEvaluateResponse.attributeTypeMap;
  }

  public constructor() {}
}
