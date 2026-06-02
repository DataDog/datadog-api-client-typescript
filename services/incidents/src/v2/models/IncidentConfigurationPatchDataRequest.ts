import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentConfigurationPatchDataAttributesRequest } from "./IncidentConfigurationPatchDataAttributesRequest";
import { IncidentConfigurationType } from "./IncidentConfigurationType";

/**
 * Incident configuration data in a patch request.
 */
export class IncidentConfigurationPatchDataRequest {
  /**
   * Attributes for patching an incident configuration. All fields are optional.
   */
  "attributes"?: IncidentConfigurationPatchDataAttributesRequest;
  /**
   * The incident configuration identifier.
   */
  "id": string;
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
      type: "IncidentConfigurationPatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentConfigurationPatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
