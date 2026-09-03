import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An event associated with an annotated interaction.
 */
export class LLMObsAnnotatedInteractionEvent {
  /**
   * Attributes of an event associated with an annotated interaction.
   */
  "attributes": { [key: string]: any };
  /**
   * Unique identifier of the event.
   */
  "id": string;
  /**
   * Type of the event.
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
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return LLMObsAnnotatedInteractionEvent.attributeTypeMap;
  }

  public constructor() {}
}
