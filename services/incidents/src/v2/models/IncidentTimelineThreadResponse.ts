import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimelineThreadDataResponse } from "./IncidentTimelineThreadDataResponse";

/**
 * Response with thread entries for a timeline entry.
 */
export class IncidentTimelineThreadResponse {
  /**
   * List of thread entries.
   */
  "data": Array<IncidentTimelineThreadDataResponse>;
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
      type: "Array<IncidentTimelineThreadDataResponse>",
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
    return IncidentTimelineThreadResponse.attributeTypeMap;
  }

  public constructor() {}
}
