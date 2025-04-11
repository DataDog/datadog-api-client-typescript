import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentTeamIncludedItems } from "./IncidentTeamIncludedItems";
import { IncidentTeamResponseData } from "./IncidentTeamResponseData";

/**
 * Response with a list of incident team payloads.
 */
export class IncidentTeamsResponse {
  /**
   * An array of incident teams.
   */
  "data": Array<IncidentTeamResponseData>;
  /**
   * Included related resources which the user requested.
   */
  "included"?: Array<IncidentTeamIncludedItems>;
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
      type: "Array<IncidentTeamResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentTeamIncludedItems>",
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
    return IncidentTeamsResponse.attributeTypeMap;
  }

  public constructor() {}
}
