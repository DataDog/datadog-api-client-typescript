import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseLinkAttributes } from "./CaseLinkAttributes";
import { CaseLinkResourceType } from "./CaseLinkResourceType";

/**
 * Data object for creating a case link.
 */
export class CaseLinkCreate {
  /**
   * Attributes describing a directional relationship between two entities (cases, incidents, or pages).
   */
  "attributes": CaseLinkAttributes;
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
    return CaseLinkCreate.attributeTypeMap;
  }

  public constructor() {}
}
