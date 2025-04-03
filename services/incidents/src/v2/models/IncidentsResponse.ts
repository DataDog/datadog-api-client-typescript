import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseIncludedItem } from "./IncidentResponseIncludedItem";
import { IncidentResponseMeta } from "./IncidentResponseMeta";

/**
 * Response with a list of incidents.
 */
export class IncidentsResponse {
  /**
   * An array of incidents.
   */
  "data": Array<IncidentResponseData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentResponseIncludedItem>;
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
      type: "Array<IncidentResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentResponseMeta",
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
    return IncidentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
