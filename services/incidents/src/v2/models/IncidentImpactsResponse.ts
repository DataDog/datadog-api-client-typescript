import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactResponseData } from "./IncidentImpactResponseData";
import { IncidentUserData } from "./IncidentUserData";

/**
 * Response with a list of incident impacts.
 */
export class IncidentImpactsResponse {
  /**
   * An array of incident impacts.
   */
  "data": Array<IncidentImpactResponseData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentUserData>;
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
      type: "Array<IncidentImpactResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentUserData>",
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
    return IncidentImpactsResponse.attributeTypeMap;
  }

  public constructor() {}
}
