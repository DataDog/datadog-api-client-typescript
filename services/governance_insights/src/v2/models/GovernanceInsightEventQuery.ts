import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceInsightEventCompute } from "./GovernanceInsightEventCompute";

/**
 * An event query used to compute an insight value.
 */
export class GovernanceInsightEventQuery {
  /**
   * The aggregation applied to an event query.
   */
  "compute"?: GovernanceInsightEventCompute;
  /**
   * The event indexes the query runs against.
   */
  "indexes": Array<string>;
  /**
   * The event search query string.
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
    compute: {
      baseName: "compute",
      type: "GovernanceInsightEventCompute",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
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
    return GovernanceInsightEventQuery.attributeTypeMap;
  }

  public constructor() {}
}
