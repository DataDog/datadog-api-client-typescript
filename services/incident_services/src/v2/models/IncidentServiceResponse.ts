import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentServiceIncludedItems } from "./IncidentServiceIncludedItems";
import { IncidentServiceResponseData } from "./IncidentServiceResponseData";

/**
 * Response with an incident service payload.
 */
export class IncidentServiceResponse {
  /**
   * Incident Service data from responses.
   */
  "data": IncidentServiceResponseData;
  /**
   * Included objects from relationships.
   */
  "included"?: Array<IncidentServiceIncludedItems>;
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
      type: "IncidentServiceResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentServiceIncludedItems>",
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
    return IncidentServiceResponse.attributeTypeMap;
  }

  public constructor() {}
}
