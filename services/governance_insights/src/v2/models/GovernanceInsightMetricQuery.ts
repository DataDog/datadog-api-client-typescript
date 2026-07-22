import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * A metric query used to compute an insight value.
 */
export class GovernanceInsightMetricQuery {
  /**
   * The query string.
   */
  "query": string;
  /**
   * How the query result series is reduced to a single value.
   */
  "reducer": string;
  /**
   * The data source the query runs against.
   */
  "source": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
    return GovernanceInsightMetricQuery.attributeTypeMap;
  }

  public constructor() {}
}
