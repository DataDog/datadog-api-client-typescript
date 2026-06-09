import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPagerdutyIncidentDataResponse } from "./IncidentPagerdutyIncidentDataResponse";

/**
 * Response with a list of Datadog incidents related to a PagerDuty incident.
 */
export class IncidentPagerdutyRelatedIncidentsResponse {
  /**
   * List of related Datadog incidents.
   */
  "data": Array<IncidentPagerdutyIncidentDataResponse>;
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
      type: "Array<IncidentPagerdutyIncidentDataResponse>",
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
    return IncidentPagerdutyRelatedIncidentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
