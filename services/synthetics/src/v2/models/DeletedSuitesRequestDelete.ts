import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeletedSuitesRequestDeleteAttributes } from "./DeletedSuitesRequestDeleteAttributes";
import { DeletedSuitesRequestType } from "./DeletedSuitesRequestType";

export class DeletedSuitesRequestDelete {
  "attributes": DeletedSuitesRequestDeleteAttributes;
  "id"?: string;
  "type"?: DeletedSuitesRequestType;
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
      type: "DeletedSuitesRequestDeleteAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DeletedSuitesRequestType",
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
    return DeletedSuitesRequestDelete.attributeTypeMap;
  }

  public constructor() {}
}
