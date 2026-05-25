/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiCustomRuleDataType } from "./AiCustomRuleDataType";
import { AiCustomRuleItem } from "./AiCustomRuleItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response data for an AI custom rule.
 */
export class AiCustomRuleResponseData {
  /**
   * An AI custom rule embedded within a ruleset response.
   */
  "attributes": AiCustomRuleItem;
  /**
   * The rule identifier.
   */
  "id": string;
  /**
   * AI custom rule resource type.
   */
  "type": AiCustomRuleDataType;

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
      type: "AiCustomRuleItem",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiCustomRuleDataType",
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
    return AiCustomRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
