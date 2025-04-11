import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationUpdateAttributes } from "./RUMApplicationUpdateAttributes";
import { RUMApplicationUpdateType } from "./RUMApplicationUpdateType";

/**
 * RUM application update.
 */
export class RUMApplicationUpdate {
  /**
   * RUM application update attributes.
   */
  "attributes"?: RUMApplicationUpdateAttributes;
  /**
   * RUM application ID.
   */
  "id": string;
  /**
   * RUM application update type.
   */
  "type": RUMApplicationUpdateType;
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
      type: "RUMApplicationUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationUpdateType",
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
    return RUMApplicationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
