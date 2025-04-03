import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsTenantBasedHandleRequestAttributes } from "./MicrosoftTeamsTenantBasedHandleRequestAttributes";
import { MicrosoftTeamsTenantBasedHandleType } from "./MicrosoftTeamsTenantBasedHandleType";

/**
 * Tenant-based handle data from a response.
 */
export class MicrosoftTeamsTenantBasedHandleRequestData {
  /**
   * Tenant-based handle attributes.
   */
  "attributes": MicrosoftTeamsTenantBasedHandleRequestAttributes;
  /**
   * Specifies the tenant-based handle resource type.
   */
  "type": MicrosoftTeamsTenantBasedHandleType;
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
      type: "MicrosoftTeamsTenantBasedHandleRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsTenantBasedHandleType",
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
    return MicrosoftTeamsTenantBasedHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
