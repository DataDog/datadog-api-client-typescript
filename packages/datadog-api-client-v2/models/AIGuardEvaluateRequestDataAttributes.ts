/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardMessage } from "./AIGuardMessage";
import { AIGuardMeta } from "./AIGuardMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
