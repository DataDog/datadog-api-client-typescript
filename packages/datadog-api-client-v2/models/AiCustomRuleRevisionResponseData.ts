/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiCustomRuleRevisionDataType } from "./AiCustomRuleRevisionDataType";
import { AiCustomRuleRevisionResponseAttributes } from "./AiCustomRuleRevisionResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response data for an AI custom rule revision.
 */
export class AiCustomRuleRevisionResponseData {
  /**
   * Response attributes of an AI custom rule revision.
   */
  "attributes": AiCustomRuleRevisionResponseAttributes;
  /**
   * The revision identifier.
   */
  "id": string;
  /**
   * AI custom rule revision resource type.
   */
  "type": AiCustomRuleRevisionDataType;

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
      type: "AiCustomRuleRevisionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiCustomRuleRevisionDataType",
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
    return AiCustomRuleRevisionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
