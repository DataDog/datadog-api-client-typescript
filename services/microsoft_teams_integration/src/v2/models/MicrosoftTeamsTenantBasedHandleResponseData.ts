import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsTenantBasedHandleAttributes } from "./MicrosoftTeamsTenantBasedHandleAttributes";
import { MicrosoftTeamsTenantBasedHandleType } from "./MicrosoftTeamsTenantBasedHandleType";

/**
 * Tenant-based handle data from a response.
 */
export class MicrosoftTeamsTenantBasedHandleResponseData {
  /**
   * Tenant-based handle attributes.
   */
  "attributes"?: MicrosoftTeamsTenantBasedHandleAttributes;
  /**
   * The ID of the tenant-based handle.
   */
  "id"?: string;
  /**
   * Specifies the tenant-based handle resource type.
   */
  "type"?: MicrosoftTeamsTenantBasedHandleType;
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
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsTenantBasedHandleType",
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
    return MicrosoftTeamsTenantBasedHandleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
