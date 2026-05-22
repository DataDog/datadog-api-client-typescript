import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupAttributes } from "./OrgGroupAttributes";
import { OrgGroupType } from "./OrgGroupType";

/**
 * An org group resource.
 */
export class OrgGroupData {
  /**
   * Attributes of an org group.
   */
  "attributes": OrgGroupAttributes;
  /**
   * The ID of the org group.
   */
  "id": string;
  /**
   * Org groups resource type.
   */
  "type": OrgGroupType;
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
      type: "OrgGroupAttributes",
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
      type: "OrgGroupType",
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
    return OrgGroupData.attributeTypeMap;
  }

  public constructor() {}
}
