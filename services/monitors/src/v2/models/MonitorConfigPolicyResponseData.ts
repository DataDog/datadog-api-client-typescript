import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyAttributeResponse } from "./MonitorConfigPolicyAttributeResponse";
import { MonitorConfigPolicyResourceType } from "./MonitorConfigPolicyResourceType";

/**
 * A monitor configuration policy data.
 */
export class MonitorConfigPolicyResponseData {
  /**
   * Policy and policy type for a monitor configuration policy.
   */
  "attributes"?: MonitorConfigPolicyAttributeResponse;
  /**
   * ID of this monitor configuration policy.
   */
  "id"?: string;
  /**
   * Monitor configuration policy resource type.
   */
  "type"?: MonitorConfigPolicyResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "MonitorConfigPolicyAttributeResponse",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MonitorConfigPolicyResourceType",
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
    return MonitorConfigPolicyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
