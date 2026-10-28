import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderDataResponse } from "./IncidentResponderDataResponse";
import { IncidentResponderIncludedItem } from "./IncidentResponderIncludedItem";
import { IncidentRespondersResponseMeta } from "./IncidentRespondersResponseMeta";

/**
 * Response with a list of incident responders.
 */
export class IncidentRespondersResponse {
  /**
   * List of incident responders.
   */
  "data": Array<IncidentResponderDataResponse>;
  /**
   * Included related resources.
   */
  "included"?: Array<IncidentResponderIncludedItem>;
  /**
   * Links to pages of incident responders.
   */
  "links"?: { [key: string]: string };
  /**
   * Pagination metadata for the responder list.
   */
  "meta"?: IncidentRespondersResponseMeta;
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
      type: "Array<IncidentResponderDataResponse>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentResponderIncludedItem>",
    },
    links: {
      baseName: "links",
      type: "{ [key: string]: string; }",
    },
    meta: {
      baseName: "meta",
      type: "IncidentRespondersResponseMeta",
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
    return IncidentRespondersResponse.attributeTypeMap;
  }

  public constructor() {}
}
