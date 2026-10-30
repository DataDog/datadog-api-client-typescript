/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardContentPartType } from "./AIGuardContentPartType";
import { AIGuardImageURL } from "./AIGuardImageURL";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
