/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DerivedMetricQuery } from "./DerivedMetricQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of a derived metric as a formula over one or more queries.
 */
export class DerivedMetricDefinition {
  /**
   * The formula that combines the queries into the value of the derived metric.
   */
  "formula": string;
  /**
   * The list of queries referenced by the formula.
   */
  "queries": Array<DerivedMetricQuery>;

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
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<DerivedMetricQuery>",
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
    return DerivedMetricDefinition.attributeTypeMap;
  }

  public constructor() {}
}
