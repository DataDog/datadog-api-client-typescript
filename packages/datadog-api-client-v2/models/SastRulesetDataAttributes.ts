/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a SAST ruleset, including its name, description, and rules.
 */
export class SastRulesetDataAttributes {
  /**
   * A detailed description of the ruleset's purpose and the types of issues it targets.
   */
  "description": string;
  /**
   * The unique name of the ruleset.
   */
  "name": string;
  /**
   * The list of static analysis rules included in this ruleset.
   */
  "rules": Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems>;
  /**
   * A brief summary of the ruleset, suitable for display in listings.
   */
  "shortDescription": string;

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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems>",
      required: true,
    },
    shortDescription: {
      baseName: "short_description",
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
    return SastRulesetDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
