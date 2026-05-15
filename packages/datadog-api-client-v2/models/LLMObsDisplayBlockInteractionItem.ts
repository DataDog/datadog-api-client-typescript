/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsContentBlock } from "./LLMObsContentBlock";
import { LLMObsDisplayBlockInteractionType } from "./LLMObsDisplayBlockInteractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
