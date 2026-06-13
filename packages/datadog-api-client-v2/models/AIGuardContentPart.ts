/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardImageURL } from "./AIGuardImageURL";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single part of a multipart message content.
 */
export class AIGuardContentPart {
  /**
   * An image URL reference for multimodal content.
   */
  "imageUrl"?: AIGuardImageURL;
  /**
   * The text content of this part, required when type is text.
   */
  "text"?: string;
  /**
   * The type of content part, either text or image_url.
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
    return AIGuardContentPart.attributeTypeMap;
  }

  public constructor() {}
}
