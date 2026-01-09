import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchStatusPageRequestDataAttributes } from "./PatchStatusPageRequestDataAttributes";
import { StatusPageDataType } from "./StatusPageDataType";

export class PatchStatusPageRequestData {
  "attributes"?: PatchStatusPageRequestDataAttributes;
  "id"?: string;
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
      type: "PatchStatusPageRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return PatchStatusPageRequestData.attributeTypeMap;
  }

  public constructor() {}
}
