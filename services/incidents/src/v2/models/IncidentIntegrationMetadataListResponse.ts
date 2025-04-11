import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentIntegrationMetadataResponseData } from "./IncidentIntegrationMetadataResponseData";
import { IncidentIntegrationMetadataResponseIncludedItem } from "./IncidentIntegrationMetadataResponseIncludedItem";
import { IncidentResponseMeta } from "./IncidentResponseMeta";

/**
 * Response with a list of incident integration metadata.
 */
export class IncidentIntegrationMetadataListResponse {
  /**
   * An array of incident integration metadata.
   */
  "data": Array<IncidentIntegrationMetadataResponseData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentIntegrationMetadataResponseIncludedItem>;
  /**
   * The metadata object containing pagination metadata.
   */
  "meta"?: IncidentResponseMeta;
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
      type: "Array<IncidentIntegrationMetadataResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentIntegrationMetadataResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentResponseMeta",
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
    return IncidentIntegrationMetadataListResponse.attributeTypeMap;
  }

  public constructor() {}
}
