import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentServiceNowRecordDataAttributesRequest } from "./IncidentServiceNowRecordDataAttributesRequest";
import { IncidentServiceNowRecordPromptType } from "./IncidentServiceNowRecordPromptType";

/**
 * ServiceNow record data in a create request.
 */
export class IncidentServiceNowRecordDataRequest {
  /**
   * Attributes for creating a ServiceNow record for an incident.
   */
  "attributes": IncidentServiceNowRecordDataAttributesRequest;
  /**
   * ServiceNow record prompt resource type.
   */
  "type": IncidentServiceNowRecordPromptType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentServiceNowRecordDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentServiceNowRecordPromptType",
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
    return IncidentServiceNowRecordDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
