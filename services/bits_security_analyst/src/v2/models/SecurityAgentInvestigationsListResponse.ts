import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationListItem } from "./SecurityAgentInvestigationListItem";
import { SecurityAgentInvestigationsListMeta } from "./SecurityAgentInvestigationsListMeta";

/**
 * A page of investigations.
 */
export class SecurityAgentInvestigationsListResponse {
  /**
   * The investigations on this page.
   */
  "data": Array<SecurityAgentInvestigationListItem>;
  /**
   * Metadata of a page of investigations.
   */
  "meta": SecurityAgentInvestigationsListMeta;
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
      type: "Array<SecurityAgentInvestigationListItem>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityAgentInvestigationsListMeta",
      required: true,
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
    return SecurityAgentInvestigationsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
