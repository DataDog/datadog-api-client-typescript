import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardContentPartType } from "./AIGuardContentPartType";
import { AIGuardImageURL } from "./AIGuardImageURL";

/**
 * One part of multipart message content, following the OpenAI content part
 * format. For user, system, developer, and tool messages, a text part must
 * include non-empty `text`, and an image part must include `image_url` with
 * a non-empty `url`. These content-part checks do not apply to assistant messages.
 */
export class AIGuardContentPart {
  /**
   * An image referenced by URL in a message content part.
   */
  "imageUrl"?: AIGuardImageURL;
  /**
   * The text content, required and non-empty when `type` is `text` in a user, system, developer, or tool message.
   */
  "text"?: string;
  /**
   * The type of the content part.
   */
  "type": AIGuardContentPartType;
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
    imageUrl: {
      baseName: "image_url",
      type: "AIGuardImageURL",
    },
    text: {
      baseName: "text",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AIGuardContentPartType",
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
    return AIGuardContentPart.attributeTypeMap;
  }

  public constructor() {}
}
