import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardEvaluateRequestDataAttributes } from "./AIGuardEvaluateRequestDataAttributes";
import { AIGuardEvaluationType } from "./AIGuardEvaluationType";

/**
 * The JSON:API request envelope for an AI Guard evaluation.
 */
export class AIGuardEvaluateRequestData {
  /**
   * The conversation to evaluate and its metadata.
   */
  "attributes": AIGuardEvaluateRequestDataAttributes;
  /**
   * The JSON:API resource type for AI Guard evaluation requests and responses.
   * Its value is `evaluations` for the action endpoint `/api/v2/ai-guard/evaluate`.
   */
  "type": AIGuardEvaluationType;
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
    attributes: {
      baseName: "attributes",
      type: "AIGuardEvaluateRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AIGuardEvaluationType",
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
    return AIGuardEvaluateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
