import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackStateData } from "./SecurityMonitoringContentPackStateData";
import { SecurityMonitoringContentPackStateMeta } from "./SecurityMonitoringContentPackStateMeta";

/**
 * Response containing content pack states.
 */
export class SecurityMonitoringContentPackStatesResponse {
  /**
   * Array of content pack states.
   */
  "data": Array<SecurityMonitoringContentPackStateData>;
  /**
   * Metadata for content pack states
   */
  "meta": SecurityMonitoringContentPackStateMeta;
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
      type: "Array<SecurityMonitoringContentPackStateData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringContentPackStateMeta",
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
    return SecurityMonitoringContentPackStatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
