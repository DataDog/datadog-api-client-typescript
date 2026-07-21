import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentOnCallPageTarget } from "./IncidentOnCallPageTarget";

/**
 * Attributes for linking a page to an incident.
 */
export class IncidentOnCallPageDataAttributesRequest {
  /**
   * The key of the on-call page.
   */
  "key"?: string;
  /**
   * The target of an on-call page.
   */
  "pageTarget"?: IncidentOnCallPageTarget;
  /**
   * The team ID associated with the page (deprecated, use page_target instead).
   */
  "teamId"?: string;
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
    key: {
      baseName: "key",
      type: "string",
    },
    pageTarget: {
      baseName: "page_target",
      type: "IncidentOnCallPageTarget",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
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
    return IncidentOnCallPageDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
