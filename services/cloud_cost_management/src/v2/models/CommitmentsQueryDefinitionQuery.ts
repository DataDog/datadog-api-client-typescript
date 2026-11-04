import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsQueryDefinitionAggregator } from "./CommitmentsQueryDefinitionAggregator";
import { CommitmentsQueryDefinitionDataSource } from "./CommitmentsQueryDefinitionDataSource";

/**
 * A metric query of a query definition.
 */
export class CommitmentsQueryDefinitionQuery {
  /**
   * The reducer a scalar widget applies to the query.
   */
  "aggregator": CommitmentsQueryDefinitionAggregator;
  /**
   * The data source of the query.
   */
  "dataSource": CommitmentsQueryDefinitionDataSource;
  /**
   * The name formulas use to reference the query.
   */
  "name": string;
  /**
   * The metric query.
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
      type: "CommitmentsQueryDefinitionAggregator",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "CommitmentsQueryDefinitionDataSource",
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
    return CommitmentsQueryDefinitionQuery.attributeTypeMap;
  }

  public constructor() {}
}
