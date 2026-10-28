import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRespondersPagination } from "./IncidentRespondersPagination";
import { IncidentRespondersResponseMetaPage } from "./IncidentRespondersResponseMetaPage";

/**
 * Pagination metadata for the responder list.
 */
export class IncidentRespondersResponseMeta {
  /**
   * Total count for the responder list.
   */
  "page"?: IncidentRespondersResponseMetaPage;
  /**
   * Offset-based pagination for incident responders.
   */
  "pagination"?: IncidentRespondersPagination;
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
    page: {
      baseName: "page",
      type: "IncidentRespondersResponseMetaPage",
    },
    pagination: {
      baseName: "pagination",
      type: "IncidentRespondersPagination",
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
    return IncidentRespondersResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
