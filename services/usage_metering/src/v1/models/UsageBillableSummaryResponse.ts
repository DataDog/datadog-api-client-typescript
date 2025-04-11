import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageBillableSummaryHour } from "./UsageBillableSummaryHour";

/**
 * Response with monthly summary of data billed by Datadog.
 */
export class UsageBillableSummaryResponse {
  /**
   * An array of objects regarding usage of billable summary.
   */
  "usage"?: Array<UsageBillableSummaryHour>;
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
    usage: {
      baseName: "usage",
      type: "Array<UsageBillableSummaryHour>",
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
    return UsageBillableSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
