import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageRequestDataAttributes } from "./CreateStatusPageRequestDataAttributes";
import { StatusPageDataType } from "./StatusPageDataType";

export class CreateStatusPageRequestData {
  /**
   * The supported attributes for creating a status page.
   */
  "attributes"?: CreateStatusPageRequestDataAttributes;
  /**
   * Status pages resource type.
   */
  "type": StatusPageDataType;
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
      type: "CreateStatusPageRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "StatusPageDataType",
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
    return CreateStatusPageRequestData.attributeTypeMap;
  }

  public constructor() {}
}
