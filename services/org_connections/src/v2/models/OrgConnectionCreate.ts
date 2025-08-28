import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionCreateAttributes } from "./OrgConnectionCreateAttributes";
import { OrgConnectionCreateRelationships } from "./OrgConnectionCreateRelationships";
import { OrgConnectionType } from "./OrgConnectionType";

/**
 * Org connection creation data.
 */
export class OrgConnectionCreate {
  /**
   * Attributes for creating an org connection.
   */
  "attributes": OrgConnectionCreateAttributes;
  /**
   * Relationships for org connection creation.
   */
  "relationships": OrgConnectionCreateRelationships;
  /**
   * Org connection type.
   */
  "type": OrgConnectionType;
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
      type: "OrgConnectionCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OrgConnectionCreateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgConnectionType",
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
    return OrgConnectionCreate.attributeTypeMap;
  }

  public constructor() {}
}
