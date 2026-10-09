import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseViewAttributes } from "./CaseViewAttributes";
import { CaseViewRelationships } from "./CaseViewRelationships";
import { CaseViewResourceType } from "./CaseViewResourceType";

/**
 * A saved work item view that provides a filtered, reusable list of work items matching a specific query. Views act as persistent dashboards for monitoring work item subsets.
 */
export class CaseView {
  /**
   * Attributes of a work item view, including the filter query and optional notification rule.
   */
  "attributes": CaseViewAttributes;
  /**
   * The view's identifier.
   */
  "id": string;
  /**
   * Related resources for the work item view, including the creator, last modifier, and associated project.
   */
  "relationships"?: CaseViewRelationships;
  /**
   * JSON:API resource type for work item views.
   */
  "type": CaseViewResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "CaseViewAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CaseViewRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseViewResourceType",
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
    return CaseView.attributeTypeMap;
  }

  public constructor() {}
}
