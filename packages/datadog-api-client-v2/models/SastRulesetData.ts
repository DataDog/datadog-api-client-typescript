/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType";
import { SastRulesetDataAttributes } from "./SastRulesetDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The primary data object representing a SAST ruleset.
 */
export class SastRulesetData {
  /**
   * The attributes of a SAST ruleset, including its name, description, and rules.
   */
  "attributes": SastRulesetDataAttributes;
  /**
   * The unique identifier of the ruleset resource.
   */
  "id": string;
  /**
   * Rulesets resource type.
   */
  "type": GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType;

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
      type: "SastRulesetDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType",
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
    return SastRulesetData.attributeTypeMap;
  }

  public constructor() {}
}
