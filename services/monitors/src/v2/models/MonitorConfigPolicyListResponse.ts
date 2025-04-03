import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyResponseData } from "./MonitorConfigPolicyResponseData";

/**
 * Response for retrieving all monitor configuration policies.
 */
export class MonitorConfigPolicyListResponse {
  /**
   * An array of monitor configuration policies.
   */
  "data"?: Array<MonitorConfigPolicyResponseData>;
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
    data: {
      baseName: "data",
      type: "Array<MonitorConfigPolicyResponseData>",
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
    return MonitorConfigPolicyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
