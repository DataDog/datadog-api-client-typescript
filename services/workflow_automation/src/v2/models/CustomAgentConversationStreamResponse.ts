import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgenticEvent } from "./AgenticEvent";

export class CustomAgentConversationStreamResponse {
  "event": AgenticEvent;
  /**
   * The conversation ID.
   */
  "id": string;
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
    event: {
      baseName: "event",
      type: "AgenticEvent",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return CustomAgentConversationStreamResponse.attributeTypeMap;
  }

  public constructor() {}
}
