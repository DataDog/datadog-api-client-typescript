import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetSchedulesV2ResponseMeta } from "./FleetSchedulesV2ResponseMeta";
import { FleetScheduleV2 } from "./FleetScheduleV2";

/**
 * Response containing a list of fleet schedules.
 */
export class FleetSchedulesV2Response {
  /**
   * Array of schedules for the organization.
   */
  "data": Array<FleetScheduleV2>;
  /**
   * Metadata for the v2 list of schedules response.
   */
  "meta"?: FleetSchedulesV2ResponseMeta;
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
      type: "Array<FleetScheduleV2>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetSchedulesV2ResponseMeta",
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
    return FleetSchedulesV2Response.attributeTypeMap;
  }

  public constructor() {}
}
