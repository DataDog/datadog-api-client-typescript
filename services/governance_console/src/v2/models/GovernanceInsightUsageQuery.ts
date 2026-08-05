import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A usage query used to compute an insight value.
 */
export class GovernanceInsightUsageQuery {
  /**
   * The usage query string.
   */
  "query": string;
  /**
   * How the query result series is reduced to a single value.
   */
  "reducer": string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GovernanceInsightUsageQuery.attributeTypeMap;
  }

  public constructor() {}
}
