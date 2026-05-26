/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiPromptDataType } from "./AiPromptDataType";
import { AiPromptResponseAttributes } from "./AiPromptResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response data for an AI prompt.
 */
export class AiPromptResponseData {
  /**
   * Response attributes of an AI prompt.
   */
  "attributes": AiPromptResponseAttributes;
  /**
   * The prompt identifier.
   */
  "id": string;
  /**
   * AI prompt resource type.
   */
  "type": AiPromptDataType;

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
      type: "AiPromptResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiPromptDataType",
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
    return AiPromptResponseData.attributeTypeMap;
  }

  public constructor() {}
}
