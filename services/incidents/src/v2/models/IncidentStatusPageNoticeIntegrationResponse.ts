import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatusPageNoticeIntegrationDataResponse } from "./IncidentStatusPageNoticeIntegrationDataResponse";

/**
 * Response with status page notice integration metadata.
 */
export class IncidentStatusPageNoticeIntegrationResponse {
  /**
   * Status page notice integration data in a response.
   */
  "data": IncidentStatusPageNoticeIntegrationDataResponse;
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
      type: "IncidentStatusPageNoticeIntegrationDataResponse",
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
    return IncidentStatusPageNoticeIntegrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
