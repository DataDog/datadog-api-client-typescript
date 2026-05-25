/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an AI custom ruleset.
 */
export class AiCustomRulesetRequestAttributes {
  /**
   * Base64-encoded full description of the ruleset.
   */
  "description": string;
  /**
   * The ruleset name.
   */
  "name": string;
  /**
   * Base64-encoded short description of the ruleset.
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
    return AiCustomRulesetRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
