import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseLinkAttributes } from "./CaseLinkAttributes";
import { CaseLinkResourceType } from "./CaseLinkResourceType";

/**
 * A directional link representing a relationship between two entities. At least one entity must be a case.
 */
export class CaseLink {
  /**
   * Attributes describing a directional relationship between two entities (cases, incidents, or pages).
   */
  "attributes": CaseLinkAttributes;
  /**
   * The case link identifier.
   */
  "id": string;
  /**
   * JSON:API resource type for case links.
   */
  "type": CaseLinkResourceType;
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
      type: "CaseLinkAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseLinkResourceType",
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
    return CaseLink.attributeTypeMap;
  }

  public constructor() {}
}
