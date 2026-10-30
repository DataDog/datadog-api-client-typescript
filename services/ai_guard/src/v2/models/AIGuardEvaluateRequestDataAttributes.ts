import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardMessage } from "./AIGuardMessage";
import { AIGuardMeta } from "./AIGuardMeta";

/**
 * The conversation to evaluate and its metadata.
 */
export class AIGuardEvaluateRequestDataAttributes {
  /**
   * The messages of the conversation to evaluate, in order. Must contain at least one message.
   */
  "messages": Array<AIGuardMessage>;
  /**
   * Metadata about the evaluated conversation, used to select the policy and evaluator behavior.
   */
  "meta"?: AIGuardMeta;
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
    messages: {
      baseName: "messages",
      type: "Array<AIGuardMessage>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "AIGuardMeta",
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
    return AIGuardEvaluateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
