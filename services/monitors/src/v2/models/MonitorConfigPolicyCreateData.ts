import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyAttributeCreateRequest } from "./MonitorConfigPolicyAttributeCreateRequest";
import { MonitorConfigPolicyResourceType } from "./MonitorConfigPolicyResourceType";

/**
 * A monitor configuration policy data.
 */
export class MonitorConfigPolicyCreateData {
  /**
   * Policy and policy type for a monitor configuration policy.
   */
  "attributes": MonitorConfigPolicyAttributeCreateRequest;
  /**
   * Monitor configuration policy resource type.
   */
  "type": MonitorConfigPolicyResourceType;
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
      type: "MonitorConfigPolicyAttributeCreateRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MonitorConfigPolicyResourceType",
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
    return MonitorConfigPolicyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
