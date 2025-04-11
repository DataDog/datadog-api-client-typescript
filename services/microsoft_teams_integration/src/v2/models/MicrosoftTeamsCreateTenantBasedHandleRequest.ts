import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsTenantBasedHandleRequestData } from "./MicrosoftTeamsTenantBasedHandleRequestData";

/**
 * Create tenant-based handle request.
 */
export class MicrosoftTeamsCreateTenantBasedHandleRequest {
  /**
   * Tenant-based handle data from a response.
   */
  "data": MicrosoftTeamsTenantBasedHandleRequestData;
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
      type: "MicrosoftTeamsTenantBasedHandleRequestData",
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
    return MicrosoftTeamsCreateTenantBasedHandleRequest.attributeTypeMap;
  }

  public constructor() {}
}
