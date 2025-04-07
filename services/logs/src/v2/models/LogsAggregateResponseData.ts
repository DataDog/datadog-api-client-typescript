import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAggregateBucket } from "./LogsAggregateBucket";

/**
 * The query results
 */
export class LogsAggregateResponseData {
  /**
   * The list of matching buckets, one item per bucket
   */
  "buckets"?: Array<LogsAggregateBucket>;
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
    buckets: {
      baseName: "buckets",
      type: "Array<LogsAggregateBucket>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAggregateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
