import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardEvaluateRequestData } from "./AIGuardEvaluateRequestData";

/**
 * The request to evaluate a conversation for security threats.
 */
export class AIGuardEvaluateRequest {
  /**
   * The JSON:API request envelope for an AI Guard evaluation.
   */
  "data": AIGuardEvaluateRequestData;
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
      type: "AIGuardEvaluateRequestData",
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
    return AIGuardEvaluateRequest.attributeTypeMap;
  }

  public constructor() {}
}
