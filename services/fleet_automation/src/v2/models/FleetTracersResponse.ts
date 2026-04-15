import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetTracersResponseData } from "./FleetTracersResponseData";
import { FleetTracersResponseMeta } from "./FleetTracersResponseMeta";

/**
 * Response containing a paginated list of fleet tracers.
 */
export class FleetTracersResponse {
  /**
   * The response data containing status and tracers array.
   */
  "data": FleetTracersResponseData;
  /**
   * Metadata for the list of tracers response.
   */
  "meta"?: FleetTracersResponseMeta;
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
      type: "FleetTracersResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetTracersResponseMeta",
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
    return FleetTracersResponse.attributeTypeMap;
  }

  public constructor() {}
}
