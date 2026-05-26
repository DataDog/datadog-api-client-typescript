/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiCustomRuleDataType } from "./AiCustomRuleDataType";
import { AiCustomRuleRequestAttributes } from "./AiCustomRuleRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request data for creating an AI custom rule.
 */
export class AiCustomRuleRequestData {
  /**
   * Attributes for creating an AI custom rule.
   */
  "attributes"?: AiCustomRuleRequestAttributes;
  /**
   * The rule identifier, which must match the name.
   */
  "id"?: string;
  /**
   * AI custom rule resource type.
   */
  "type"?: AiCustomRuleDataType;

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
      type: "AiCustomRuleRequestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiCustomRuleDataType",
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
    return AiCustomRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
