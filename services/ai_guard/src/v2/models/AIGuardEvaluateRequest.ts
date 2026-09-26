import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardMessage } from "./AIGuardMessage";
import { AIGuardMeta } from "./AIGuardMeta";

/**
 * The evaluation request payload containing conversation messages and optional metadata.
 */
export class AIGuardEvaluateRequest {
  /**
   * The list of conversation messages to evaluate. Must contain at least one message.
   */
  "messages": Array<AIGuardMessage>;
  /**
   * Optional metadata providing context about the originating service and request.
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
    return AIGuardEvaluateRequest.attributeTypeMap;
  }

  public constructor() {}
}
