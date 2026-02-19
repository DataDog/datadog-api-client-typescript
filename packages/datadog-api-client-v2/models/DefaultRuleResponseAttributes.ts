/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Default rule attributes.
 */
export class DefaultRuleResponseAttributes {
  /**
   * The description of the default rule.
   */
  "description"?: string;
  /**
   * The maturity level of the rule.
   */
  "level"?: number;
  /**
   * The name of the default rule.
   */
  "name": string;
  /**
   * Required scope for the rule.
   */
  "scopeRequired"?: string;
  /**
   * The description of the scorecard.
   */
  "scorecardDescription"?: string;
  /**
   * The scorecard this rule belongs to.
   */
  "scorecardName": string;

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
    },
    level: {
      baseName: "level",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scopeRequired: {
      baseName: "scope_required",
      type: "string",
    },
    scorecardDescription: {
      baseName: "scorecard_description",
      type: "string",
    },
    scorecardName: {
      baseName: "scorecard_name",
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
    return DefaultRuleResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
