import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetSchedulesV2Page } from "./FleetSchedulesV2Page";

/**
 * Metadata for the v2 list of schedules response.
 */
export class FleetSchedulesV2ResponseMeta {
  /**
   * Pagination details for the v2 list of schedules.
   */
  "page"?: FleetSchedulesV2Page;
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
    page: {
      baseName: "page",
      type: "FleetSchedulesV2Page",
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
    return FleetSchedulesV2ResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
