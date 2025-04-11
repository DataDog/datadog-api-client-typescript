import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentIntegrationMetadataCreateData } from "./IncidentIntegrationMetadataCreateData";

/**
 * Create request for an incident integration metadata.
 */
export class IncidentIntegrationMetadataCreateRequest {
  /**
   * Incident integration metadata data for a create request.
   */
  "data": IncidentIntegrationMetadataCreateData;
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
      type: "IncidentIntegrationMetadataCreateData",
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
    return IncidentIntegrationMetadataCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
