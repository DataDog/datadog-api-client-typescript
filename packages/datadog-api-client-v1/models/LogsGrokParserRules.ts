/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Set of rules for the grok parser.
 */
export class LogsGrokParserRules {
  /**
   * List of match rules for the grok parser, separated by a new line.
   */
  "matchRules": string;
  /**
   * List of support rules for the grok parser, separated by a new line.
   */
  "supportRules"?: string;

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
    matchRules: {
      baseName: "match_rules",
      type: "string",
      required: true,
    },
    supportRules: {
      baseName: "support_rules",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsGrokParserRules.attributeTypeMap;
  }

  public constructor() {}
}
