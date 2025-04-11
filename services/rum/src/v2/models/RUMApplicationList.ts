import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationListAttributes } from "./RUMApplicationListAttributes";
import { RUMApplicationListType } from "./RUMApplicationListType";

/**
 * RUM application list.
 */
export class RUMApplicationList {
  /**
   * RUM application list attributes.
   */
  "attributes": RUMApplicationListAttributes;
  /**
   * RUM application ID.
   */
  "id"?: string;
  /**
   * RUM application list type.
   */
  "type": RUMApplicationListType;
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
      type: "RUMApplicationListAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RUMApplicationListType",
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
    return RUMApplicationList.attributeTypeMap;
  }

  public constructor() {}
}
