import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A metric query used to compute usage against a limit.
 */
export class GovernanceLimitQuery {
  /**
   * The metric query expression used to compute the limit value.
   */
  "query": string;
  /**
   * How the query results are aggregated into a single value (for example, sum, max, or avg).
   */
  "reducer": string;
  /**
   * The data source used to evaluate the metric query (for example, the metrics or events backend).
   */
  "source": string;
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
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    reducer: {
      baseName: "reducer",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
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
    return GovernanceLimitQuery.attributeTypeMap;
  }

  public constructor() {}
}
