import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentZoomConfigurationDataAttributesResponse } from "./IncidentZoomConfigurationDataAttributesResponse";
import { IncidentZoomConfigurationType } from "./IncidentZoomConfigurationType";

/**
 * Zoom configuration data in a response.
 */
export class IncidentZoomConfigurationDataResponse {
  /**
   * Attributes of a Zoom configuration.
   */
  "attributes": IncidentZoomConfigurationDataAttributesResponse;
  /**
   * The configuration identifier.
   */
  "id": string;
  /**
   * Zoom configuration resource type.
   */
  "type": IncidentZoomConfigurationType;
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
      type: "IncidentZoomConfigurationDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentZoomConfigurationType",
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
    return IncidentZoomConfigurationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
