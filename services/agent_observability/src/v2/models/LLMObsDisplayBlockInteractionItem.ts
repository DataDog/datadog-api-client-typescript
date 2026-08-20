import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsContentBlock } from "./LLMObsContentBlock";
import { LLMObsDisplayBlockInteractionType } from "./LLMObsDisplayBlockInteractionType";

/**
 * An interaction whose rendered content is supplied directly as a list
 * of display blocks. The server generates `content_id` deterministically
 * from the block list.
 */
export class LLMObsDisplayBlockInteractionItem {
  /**
   * List of content blocks that make up a `display_block` interaction.
   * Must contain at least one block.
   */
  "displayBlock": Array<LLMObsContentBlock>;
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
    displayBlock: {
      baseName: "display_block",
      type: "Array<LLMObsContentBlock>",
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
    return LLMObsDisplayBlockInteractionItem.attributeTypeMap;
  }

  public constructor() {}
}
