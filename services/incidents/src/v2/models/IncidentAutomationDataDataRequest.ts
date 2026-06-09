import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAutomationDataAttributesRequest } from "./IncidentAutomationDataAttributesRequest";
import { IncidentAutomationDataType } from "./IncidentAutomationDataType";

/**
 * Automation data for a request.
 */
export class IncidentAutomationDataDataRequest {
  /**
   * Attributes for creating or updating automation data.
   */
  "attributes": IncidentAutomationDataAttributesRequest;
  /**
   * Incident automation data resource type.
   */
  "type": IncidentAutomationDataType;
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
      type: "IncidentAutomationDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentAutomationDataType",
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
    return IncidentAutomationDataDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
