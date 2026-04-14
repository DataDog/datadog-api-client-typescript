/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";
import { UserJourneySearchTarget } from "./UserJourneySearchTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Group by configuration for User Journey formula queries.
 */
export class UserJourneyFormulaGroupBy {
  /**
   * Facet name to group by.
   */
  "facet": string;
  /**
   * Maximum number of groups to return.
   */
  "limit"?: number;
  /**
   * Whether to exclude events missing the group-by facet.
   */
  "shouldExcludeMissing"?: boolean;
  /**
   * Options for sorting group by results.
   */
  "sort"?: FormulaAndFunctionEventQueryGroupBySort;
  /**
   * Target for user journey search.
   */
  "target"?: UserJourneySearchTarget;

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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    shouldExcludeMissing: {
      baseName: "should_exclude_missing",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "FormulaAndFunctionEventQueryGroupBySort",
    },
    target: {
      baseName: "target",
      type: "UserJourneySearchTarget",
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
    return UserJourneyFormulaGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
