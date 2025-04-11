import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsTenantBasedHandleInfoResponseAttributes } from "./MicrosoftTeamsTenantBasedHandleInfoResponseAttributes";
import { MicrosoftTeamsTenantBasedHandleInfoType } from "./MicrosoftTeamsTenantBasedHandleInfoType";

/**
 * Tenant-based handle data from a response.
 */
export class MicrosoftTeamsTenantBasedHandleInfoResponseData {
  /**
   * Tenant-based handle attributes.
   */
  "attributes"?: MicrosoftTeamsTenantBasedHandleInfoResponseAttributes;
  /**
   * The ID of the tenant-based handle.
   */
  "id"?: string;
  /**
   * Tenant-based handle resource type.
   */
  "type"?: MicrosoftTeamsTenantBasedHandleInfoType;
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
      type: "MicrosoftTeamsTenantBasedHandleInfoResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsTenantBasedHandleInfoType",
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
    return MicrosoftTeamsTenantBasedHandleInfoResponseData.attributeTypeMap;
  }

  public constructor() {}
}
