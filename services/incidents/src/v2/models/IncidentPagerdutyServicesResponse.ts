import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPagerdutyServiceData } from "./IncidentPagerdutyServiceData";

/**
 * Response with a list of PagerDuty services.
 */
export class IncidentPagerdutyServicesResponse {
  /**
   * List of PagerDuty services.
   */
  "data": Array<IncidentPagerdutyServiceData>;
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
      type: "Array<IncidentPagerdutyServiceData>",
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
    return IncidentPagerdutyServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
