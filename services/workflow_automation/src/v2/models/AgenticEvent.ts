import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class AgenticEvent {
  /**
   * The message content.
   */
  "message": string;
  /**
   * Additional payload data for the event.
   */
  "payload"?: any;
  /**
   * The type of agentic event.
   */
  "type": string;
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
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    payload: {
      baseName: "payload",
      type: "any",
    },
    type: {
      baseName: "type",
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
    return AgenticEvent.attributeTypeMap;
  }

  public constructor() {}
}
