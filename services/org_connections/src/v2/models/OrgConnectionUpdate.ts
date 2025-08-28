import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionType } from "./OrgConnectionType";
import { OrgConnectionUpdateAttributes } from "./OrgConnectionUpdateAttributes";

/**
 * Org connection update data.
 */
export class OrgConnectionUpdate {
  /**
   * Attributes for updating an org connection.
   */
  "attributes": OrgConnectionUpdateAttributes;
  /**
   * The unique identifier of the org connection.
   */
  "id": string;
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
      type: "OrgConnectionUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return OrgConnectionUpdate.attributeTypeMap;
  }

  public constructor() {}
}
