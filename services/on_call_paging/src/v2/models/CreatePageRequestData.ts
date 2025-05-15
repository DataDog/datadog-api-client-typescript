import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatePageRequestDataAttributes } from "./CreatePageRequestDataAttributes";
import { CreatePageRequestDataType } from "./CreatePageRequestDataType";

/**
 * The main request body, including attributes and resource type.
 */
export class CreatePageRequestData {
  /**
   * Details about the On-Call Page you want to create.
   */
  "attributes"?: CreatePageRequestDataAttributes;
  /**
   * The type of resource used when creating an On-Call Page.
   */
  "type": CreatePageRequestDataType;
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
      type: "CreatePageRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "CreatePageRequestDataType",
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
    return CreatePageRequestData.attributeTypeMap;
  }

  public constructor() {}
}
