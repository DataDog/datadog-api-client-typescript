import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationItem } from "./LLMObsAnnotationItem";
import { LLMObsContentBlock } from "./LLMObsContentBlock";
import { LLMObsDisplayBlockInteractionType } from "./LLMObsDisplayBlockInteractionType";

/**
 * A display_block interaction with its associated annotations.
 */
export class LLMObsDisplayBlockAnnotatedInteractionItem {
  /**
   * List of annotations for this interaction.
   */
  "annotations": Array<LLMObsAnnotationItem>;
  /**
   * Server-generated deterministic identifier derived from the block list.
   */
  "contentId": string;
  /**
   * List of content blocks that make up a `display_block` interaction.
   * Must contain at least one block.
   */
  "displayBlock": Array<LLMObsContentBlock>;
  /**
   * Unique identifier of the interaction.
   */
  "id": string;
  /**
   * Type discriminator for a `display_block` interaction.
   */
  "type": LLMObsDisplayBlockInteractionType;
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
    annotations: {
      baseName: "annotations",
      type: "Array<LLMObsAnnotationItem>",
      required: true,
    },
    contentId: {
      baseName: "content_id",
      type: "string",
      required: true,
    },
    displayBlock: {
      baseName: "display_block",
      type: "Array<LLMObsContentBlock>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDisplayBlockInteractionType",
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
    return LLMObsDisplayBlockAnnotatedInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
