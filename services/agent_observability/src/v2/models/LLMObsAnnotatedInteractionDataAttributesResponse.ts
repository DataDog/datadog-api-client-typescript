import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionEvent } from "./LLMObsAnnotatedInteractionEvent";
import { LLMObsAnnotatedInteractionItem } from "./LLMObsAnnotatedInteractionItem";
import { LLMObsAnyInteractionType } from "./LLMObsAnyInteractionType";

/**
 * Attributes containing an annotated interaction and its related events.
 */
export class LLMObsAnnotatedInteractionDataAttributesResponse {
  /**
   * An interaction with its associated annotations.
   */
  "annotatedInteraction": LLMObsAnnotatedInteractionItem;
  /**
   * Page of events associated with the annotated interaction.
   */
  "events": Array<LLMObsAnnotatedInteractionEvent>;
  /**
   * Type of an annotated interaction.
   */
  "interactionType": LLMObsAnyInteractionType;
  /**
   * Cursor to retrieve the next page of events. Absent when there are no more events.
   */
  "nextCursor"?: string;
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
    annotatedInteraction: {
      baseName: "annotated_interaction",
      type: "LLMObsAnnotatedInteractionItem",
      required: true,
    },
    events: {
      baseName: "events",
      type: "Array<LLMObsAnnotatedInteractionEvent>",
      required: true,
    },
    interactionType: {
      baseName: "interaction_type",
      type: "LLMObsAnyInteractionType",
      required: true,
    },
    nextCursor: {
      baseName: "next_cursor",
      type: "string",
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
    return LLMObsAnnotatedInteractionDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
