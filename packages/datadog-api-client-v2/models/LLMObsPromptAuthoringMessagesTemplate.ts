/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptAuthoringItem } from "./LLMObsPromptAuthoringItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A chat prompt whose authored items are stored under `messages`.
 */
export class LLMObsPromptAuthoringMessagesTemplate {
  /**
   * A chat prompt containing messages, pinned includes, or both.
   */
  "messages": Array<LLMObsPromptAuthoringItem>;

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
      type: "Array<LLMObsPromptAuthoringItem>",
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
    return LLMObsPromptAuthoringMessagesTemplate.attributeTypeMap;
  }

  public constructor() {}
}
