import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HostMapRequest } from "./HostMapRequest";

/**
 * List of definitions.
 */
export class HostMapWidgetDefinitionRequests {
  /**
   * Updated host map.
   */
  "fill"?: HostMapRequest;
  /**
   * Updated host map.
   */
  "size"?: HostMapRequest;
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
    fill: {
      baseName: "fill",
      type: "HostMapRequest",
    },
    size: {
      baseName: "size",
      type: "HostMapRequest",
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
    return HostMapWidgetDefinitionRequests.attributeTypeMap;
  }

  public constructor() {}
}
