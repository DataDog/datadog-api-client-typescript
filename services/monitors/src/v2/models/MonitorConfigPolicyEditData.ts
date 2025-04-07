import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyAttributeEditRequest } from "./MonitorConfigPolicyAttributeEditRequest";
import { MonitorConfigPolicyResourceType } from "./MonitorConfigPolicyResourceType";

/**
 * A monitor configuration policy data.
 */
export class MonitorConfigPolicyEditData {
  /**
   * Policy and policy type for a monitor configuration policy.
   */
  "attributes": MonitorConfigPolicyAttributeEditRequest;
  /**
   * ID of this monitor configuration policy.
   */
  "id": string;
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
      type: "MonitorConfigPolicyAttributeEditRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MonitorConfigPolicyResourceType",
      required: true,
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
    return MonitorConfigPolicyEditData.attributeTypeMap;
  }

  public constructor() {}
}
