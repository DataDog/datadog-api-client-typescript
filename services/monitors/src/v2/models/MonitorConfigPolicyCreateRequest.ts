import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyCreateData } from "./MonitorConfigPolicyCreateData";

/**
 * Request for creating a monitor configuration policy.
 */
export class MonitorConfigPolicyCreateRequest {
  /**
   * A monitor configuration policy data.
   */
  "data": MonitorConfigPolicyCreateData;
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
      type: "MonitorConfigPolicyCreateData",
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
    return MonitorConfigPolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
