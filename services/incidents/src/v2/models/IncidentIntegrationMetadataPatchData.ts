import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentIntegrationMetadataAttributes } from "./IncidentIntegrationMetadataAttributes";
import { IncidentIntegrationMetadataType } from "./IncidentIntegrationMetadataType";

/**
 * Incident integration metadata data for a patch request.
 */
export class IncidentIntegrationMetadataPatchData {
  /**
   * Incident integration metadata's attributes for a create request.
   */
  "attributes": IncidentIntegrationMetadataAttributes;
  /**
   * Integration metadata resource type.
   */
  "type": IncidentIntegrationMetadataType;
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
      type: "IncidentIntegrationMetadataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentIntegrationMetadataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentIntegrationMetadataPatchData.attributeTypeMap;
  }

  public constructor() {}
}
