import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentIntegrationMetadataResponseData } from "./IncidentIntegrationMetadataResponseData";
import { IncidentIntegrationMetadataResponseIncludedItem } from "./IncidentIntegrationMetadataResponseIncludedItem";

/**
 * Response with an incident integration metadata.
 */
export class IncidentIntegrationMetadataResponse {
  /**
   * Incident integration metadata from a response.
   */
  "data": IncidentIntegrationMetadataResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentIntegrationMetadataResponseIncludedItem>;
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
      type: "IncidentIntegrationMetadataResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentIntegrationMetadataResponseIncludedItem>",
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
    return IncidentIntegrationMetadataResponse.attributeTypeMap;
  }

  public constructor() {}
}
