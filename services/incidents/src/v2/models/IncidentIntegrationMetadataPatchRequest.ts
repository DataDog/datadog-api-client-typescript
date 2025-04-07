import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentIntegrationMetadataPatchData } from "./IncidentIntegrationMetadataPatchData";

/**
 * Patch request for an incident integration metadata.
 */
export class IncidentIntegrationMetadataPatchRequest {
  /**
   * Incident integration metadata data for a patch request.
   */
  "data": IncidentIntegrationMetadataPatchData;
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
      type: "IncidentIntegrationMetadataPatchData",
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
    return IncidentIntegrationMetadataPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
