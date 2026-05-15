import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsContentBlockHeaderLevel } from "./LLMObsContentBlockHeaderLevel";
import { LLMObsContentBlockLLMObsTraceInteractionType } from "./LLMObsContentBlockLLMObsTraceInteractionType";
import { LLMObsContentBlockTimeFrame } from "./LLMObsContentBlockTimeFrame";
import { LLMObsContentBlockType } from "./LLMObsContentBlockType";

/**
 * A single content block rendered inside a `display_block` interaction.
 * `type` discriminates which other fields are meaningful:
 *
 * - `markdown` / `text`: `content` must be a string.
 * - `header`: `content` must be a string; `level`, when set, must be one of `sm`, `md`, `lg`, `xl`.
 * - `json`: `content` must be a well-formed JSON value (object, array, or scalar).
 * - `image`: `url` is required.
 * - `widget`: `tileDef` is required (any well-formed JSON; the frontend owns the renderable schema).
 * - `llmobs_trace`: `traceId` is required; `interactionType`, when set, must be `trace` or `experiment_trace`.
 *
 * `height`, when set, must be positive.
 */
export class LLMObsContentBlock {
  /**
   * Alternative text for an `image` block.
   */
  "alt"?: string;
  /**
   * Block payload. A string for `markdown`, `header`, and `text`; an
   * arbitrary JSON value (object, array, or scalar) for `json`. Omitted
   * for `image`, `widget`, and `llmobs_trace`.
   */
  "content"?: any;
  /**
   * Optional rendered height. Must be positive when set.
   */
  "height"?: number;
  /**
   * Upstream interaction type referenced by an `llmobs_trace` block.
   * Restricted to `trace` or `experiment_trace`.
   */
  "interactionType"?: LLMObsContentBlockLLMObsTraceInteractionType;
  /**
   * Optional label rendered alongside the block.
   */
  "label"?: string;
  /**
   * Visual size for a `header` block.
   */
  "level"?: LLMObsContentBlockHeaderLevel;
  /**
   * Tile definition for a `widget` block. Required for `widget`. The
   * schema is owned by the frontend renderer.
   */
  "tileDef"?: any;
  /**
   * Unix-millis time range used by chart blocks.
   */
  "timeFrame"?: LLMObsContentBlockTimeFrame;
  /**
   * Trace identifier. Required for `llmobs_trace` blocks.
   */
  "traceId"?: string;
  /**
   * Discriminator for a single `display_block` content block. Adding a
   * variant requires coordinated changes in the frontend renderer.
   */
  "type": LLMObsContentBlockType;
  /**
   * URL of the image. Required for `image` blocks.
   */
  "url"?: string;
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
    alt: {
      baseName: "alt",
      type: "string",
    },
    content: {
      baseName: "content",
      type: "any",
    },
    height: {
      baseName: "height",
      type: "number",
      format: "int64",
    },
    interactionType: {
      baseName: "interactionType",
      type: "LLMObsContentBlockLLMObsTraceInteractionType",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    level: {
      baseName: "level",
      type: "LLMObsContentBlockHeaderLevel",
    },
    tileDef: {
      baseName: "tileDef",
      type: "any",
    },
    timeFrame: {
      baseName: "timeFrame",
      type: "LLMObsContentBlockTimeFrame",
    },
    traceId: {
      baseName: "traceId",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LLMObsContentBlockType",
      required: true,
    },
    url: {
      baseName: "url",
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
    return LLMObsContentBlock.attributeTypeMap;
  }

  public constructor() {}
}
