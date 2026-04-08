/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a rule. Server-managed fields (created_at, modified_at, custom) are excluded.
 */
export class RuleAttributesRequest {
  /**
   * Explanation of the rule.
   */
  "description"?: string;
  /**
   * If enabled, the rule is calculated as part of the score.
   */
  "enabled"?: boolean;
  /**
   * The maturity level of the rule (1, 2, or 3).
   */
  "level"?: number;
  /**
   * Name of the rule.
   */
  "name"?: string;
  /**
   * Owner of the rule.
   */
  "owner"?: string;
  /**
   * A query to filter which entities this rule applies to.
   */
  "scopeQuery"?: string;
  /**
   * The scorecard name to which this rule must belong.
   */
  "scorecardName"?: string;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    level: {
      baseName: "level",
      type: "number",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    owner: {
      baseName: "owner",
      type: "string",
    },
    scopeQuery: {
      baseName: "scope_query",
      type: "string",
    },
    scorecardName: {
      baseName: "scorecard_name",
      type: "string",
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
    return RuleAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
