import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppDefinitionType } from "./AppDefinitionType";

/**
 * The definition of `DeleteAppResponseData` object.
 */
export class DeleteAppResponseData {
  /**
   * The ID of the deleted app.
   */
  "id": string;
  /**
   * The app definition type.
   */
  "type": AppDefinitionType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AppDefinitionType",
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
    return DeleteAppResponseData.attributeTypeMap;
  }

  public constructor() {}
}
