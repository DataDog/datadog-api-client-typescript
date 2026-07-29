import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentConfigurationDataAttributesResponse } from "./IncidentConfigurationDataAttributesResponse";
import { IncidentConfigurationRelationships } from "./IncidentConfigurationRelationships";
import { IncidentConfigurationType } from "./IncidentConfigurationType";

/**
 * Incident configuration data in a response.
 */
export class IncidentConfigurationDataResponse {
  /**
   * Attributes of an incident configuration in a response.
   */
  "attributes": IncidentConfigurationDataAttributesResponse;
  /**
   * The incident configuration identifier.
   */
  "id": string;
  /**
   * Relationships for an incident configuration.
   */
  "relationships"?: IncidentConfigurationRelationships;
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
      type: "IncidentConfigurationDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentConfigurationRelationships",
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
    return IncidentConfigurationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
