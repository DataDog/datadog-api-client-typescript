/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionCloudCostDataSource } from "./FormulaAndFunctionCloudCostDataSource";
import { WidgetAggregator } from "./WidgetAggregator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions Cloud Cost query.
 */
export class FormulaAndFunctionCloudCostQueryDefinition {
  /**
   * Aggregator used for the request.
   */
  "aggregator"?: WidgetAggregator;
  /**
   * The source organization UUID for cross organization queries. Feature in Private Beta.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data source for Cloud Cost queries.
   */
  "dataSource": FormulaAndFunctionCloudCostDataSource;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Query for Cloud Cost data.
   */
  "query": string;

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
    aggregator: {
      baseName: "aggregator",
      type: "WidgetAggregator",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionCloudCostDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
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
    return FormulaAndFunctionCloudCostQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
