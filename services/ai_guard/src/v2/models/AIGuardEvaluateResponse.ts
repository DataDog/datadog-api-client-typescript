import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardAction } from "./AIGuardAction";
import { AIGuardSdsFinding } from "./AIGuardSdsFinding";

/**
 * The result of the AI Guard evaluation.
 */
export class AIGuardEvaluateResponse {
  /**
   * The action recommendation from the AI Guard evaluation.
   */
  "action": AIGuardAction;
  /**
   * The overall threat probability score across all evaluated tags.
   */
  "globalProb"?: number;
  /**
   * Whether blocking mode is enabled for this organization.
   */
  "isBlockingEnabled": boolean;
  /**
   * A human-readable explanation of the action recommendation.
   */
  "reason": string;
  /**
   * Sensitive data findings detected in the evaluated conversation.
   */
  "sdsFindings"?: Array<AIGuardSdsFinding>;
  /**
   * Probability scores for each evaluated threat tag.
   */
  "tagProbs": { [key: string]: number };
  /**
   * Security threat tags detected in the evaluated conversation.
   */
  "tags": Array<string>;
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
    action: {
      baseName: "action",
      type: "AIGuardAction",
      required: true,
    },
    globalProb: {
      baseName: "global_prob",
      type: "number",
      format: "double",
    },
    isBlockingEnabled: {
      baseName: "is_blocking_enabled",
      type: "boolean",
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "string",
      required: true,
    },
    sdsFindings: {
      baseName: "sds_findings",
      type: "Array<AIGuardSdsFinding>",
    },
    tagProbs: {
      baseName: "tag_probs",
      type: "{ [key: string]: number; }",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
