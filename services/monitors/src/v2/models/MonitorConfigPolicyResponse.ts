import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyResponseData } from "./MonitorConfigPolicyResponseData";

/**
 * Response for retrieving a monitor configuration policy.
 */
export class MonitorConfigPolicyResponse {
  /**
   * A monitor configuration policy data.
   */
  "data"?: MonitorConfigPolicyResponseData;
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
      type: "MonitorConfigPolicyResponseData",
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
    return MonitorConfigPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
