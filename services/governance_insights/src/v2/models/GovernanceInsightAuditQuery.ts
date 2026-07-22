import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceInsightAuditCompute } from "./GovernanceInsightAuditCompute";

/**
 * An audit log query used to compute an insight value.
 */
export class GovernanceInsightAuditQuery {
  /**
   * The aggregation applied to an audit log query.
   */
  "compute": GovernanceInsightAuditCompute;
  /**
   * The audit log indexes the query runs against.
   */
  "indexes": Array<string>;
  /**
   * The audit log search query string.
   */
  "query": string;
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
    compute: {
      baseName: "compute",
      type: "GovernanceInsightAuditCompute",
      required: true,
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
    return GovernanceInsightAuditQuery.attributeTypeMap;
  }

  public constructor() {}
}
