import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsTenantBasedHandleAttributes } from "./MicrosoftTeamsTenantBasedHandleAttributes";
import { MicrosoftTeamsTenantBasedHandleType } from "./MicrosoftTeamsTenantBasedHandleType";

/**
 * Tenant-based handle data from a response.
 */
export class MicrosoftTeamsUpdateTenantBasedHandleRequestData {
  /**
   * Tenant-based handle attributes.
   */
  "attributes": MicrosoftTeamsTenantBasedHandleAttributes;
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
      type: "MicrosoftTeamsTenantBasedHandleAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsTenantBasedHandleType",
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
    return MicrosoftTeamsUpdateTenantBasedHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
