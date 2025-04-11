import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomConnectionAttributes } from "./CustomConnectionAttributes";
import { CustomConnectionType } from "./CustomConnectionType";

/**
 * A custom connection used by an app.
 */
export class CustomConnection {
  /**
   * The custom connection attributes.
   */
  "attributes"?: CustomConnectionAttributes;
  /**
   * The ID of the custom connection.
   */
  "id"?: string;
  /**
   * The custom connection type.
   */
  "type"?: CustomConnectionType;
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
      type: "CustomConnectionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "CustomConnectionType",
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
    return CustomConnection.attributeTypeMap;
  }

  public constructor() {}
}
