import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConfigReadAttributes } from "./OrgConfigReadAttributes";
import { OrgConfigType } from "./OrgConfigType";

/**
 * A single Org Config.
 */
export class OrgConfigRead {
  /**
   * Readable attributes of an Org Config.
   */
  "attributes": OrgConfigReadAttributes;
  /**
   * A unique identifier for an Org Config.
   */
  "id": string;
  /**
   * Data type of an Org Config.
   */
  "type": OrgConfigType;
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
      type: "OrgConfigReadAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgConfigType",
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
    return OrgConfigRead.attributeTypeMap;
  }

  public constructor() {}
}
