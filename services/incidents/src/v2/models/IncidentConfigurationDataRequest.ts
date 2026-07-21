import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentConfigurationDataAttributesRequest } from "./IncidentConfigurationDataAttributesRequest";
import { IncidentConfigurationType } from "./IncidentConfigurationType";

/**
 * Incident configuration data in a create request.
 */
export class IncidentConfigurationDataRequest {
  /**
   * Attributes for creating an incident configuration.
   */
  "attributes"?: IncidentConfigurationDataAttributesRequest;
  /**
   * Incident configuration resource type.
   */
  "type": IncidentConfigurationType;
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
      type: "IncidentConfigurationDataAttributesRequest",
    },
    type: {
      baseName: "type",
      type: "IncidentConfigurationType",
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
    return IncidentConfigurationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
