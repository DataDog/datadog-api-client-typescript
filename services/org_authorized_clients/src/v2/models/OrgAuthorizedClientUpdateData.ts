import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgAuthorizedClientType } from "./OrgAuthorizedClientType";
import { OrgAuthorizedClientUpdateAttributes } from "./OrgAuthorizedClientUpdateAttributes";

/**
 * Data object for updating an org authorized client.
 */
export class OrgAuthorizedClientUpdateData {
  /**
   * Attributes for updating an org authorized client.
   */
  "attributes"?: OrgAuthorizedClientUpdateAttributes;
  /**
   * The unique identifier of the org authorized client to update.
   */
  "id": string;
  /**
   * The resource type for org authorized clients.
   */
  "type": OrgAuthorizedClientType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "OrgAuthorizedClientUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgAuthorizedClientType",
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
    return OrgAuthorizedClientUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
