import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsTenantBasedHandleInfoResponseData } from "./MicrosoftTeamsTenantBasedHandleInfoResponseData";

/**
 * Response with a list of tenant-based handles.
 */
export class MicrosoftTeamsTenantBasedHandlesResponse {
  /**
   * An array of tenant-based handles.
   */
  "data": Array<MicrosoftTeamsTenantBasedHandleInfoResponseData>;
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
      type: "Array<MicrosoftTeamsTenantBasedHandleInfoResponseData>",
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
    return MicrosoftTeamsTenantBasedHandlesResponse.attributeTypeMap;
  }

  public constructor() {}
}
