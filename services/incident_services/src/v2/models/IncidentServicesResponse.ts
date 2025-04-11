import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentServiceIncludedItems } from "./IncidentServiceIncludedItems";
import { IncidentServiceResponseData } from "./IncidentServiceResponseData";

/**
 * Response with a list of incident service payloads.
 */
export class IncidentServicesResponse {
  /**
   * An array of incident services.
   */
  "data": Array<IncidentServiceResponseData>;
  /**
   * Included related resources which the user requested.
   */
  "included"?: Array<IncidentServiceIncludedItems>;
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
      type: "Array<IncidentServiceResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentServiceIncludedItems>",
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
    return IncidentServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
