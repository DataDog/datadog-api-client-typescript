import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampOverrideData } from "./IncidentTimestampOverrideData";
import { UserIncluded } from "./UserIncluded";

/**
 * Response containing a single incident timestamp override.
 */
export class IncidentTimestampOverrideResponse {
  /**
   * Data for a single incident timestamp override.
   */
  "data": IncidentTimestampOverrideData;
  /**
   * Included related resources.
   */
  "included"?: Array<UserIncluded>;
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
      type: "IncidentTimestampOverrideData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<UserIncluded>",
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
    return IncidentTimestampOverrideResponse.attributeTypeMap;
  }

  public constructor() {}
}
