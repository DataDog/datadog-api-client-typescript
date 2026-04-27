import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgAttributes } from "./OrgAttributes";
import { OrgResourceType } from "./OrgResourceType";

/**
 * An organization resource.
 */
export class OrgData {
  /**
   * Attributes of an organization.
   */
  "attributes": OrgAttributes;
  /**
   * The UUID of the organization.
   */
  "id": string;
  /**
   * The resource type for organizations.
   */
  "type": OrgResourceType;
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
      type: "OrgAttributes",
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
      type: "OrgResourceType",
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
    return OrgData.attributeTypeMap;
  }

  public constructor() {}
}
