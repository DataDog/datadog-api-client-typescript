import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentServiceNowRecordDataRequest } from "./IncidentServiceNowRecordDataRequest";

/**
 * Request payload for creating a ServiceNow record for an incident.
 */
export class IncidentServiceNowRecordRequest {
  /**
   * ServiceNow record data in a create request.
   */
  "data": IncidentServiceNowRecordDataRequest;
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
      type: "IncidentServiceNowRecordDataRequest",
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
    return IncidentServiceNowRecordRequest.attributeTypeMap;
  }

  public constructor() {}
}
