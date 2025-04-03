import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsTenantBasedHandleResponseData } from "./MicrosoftTeamsTenantBasedHandleResponseData";

/**
 * Response of a tenant-based handle.
 */
export class MicrosoftTeamsTenantBasedHandleResponse {
  /**
   * Tenant-based handle data from a response.
   */
  "data": MicrosoftTeamsTenantBasedHandleResponseData;
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
      type: "MicrosoftTeamsTenantBasedHandleResponseData",
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
    return MicrosoftTeamsTenantBasedHandleResponse.attributeTypeMap;
  }

  public constructor() {}
}
