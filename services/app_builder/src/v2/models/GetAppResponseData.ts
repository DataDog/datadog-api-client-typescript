import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppDefinitionType } from "./AppDefinitionType";
import { GetAppResponseDataAttributes } from "./GetAppResponseDataAttributes";

/**
 * The data object containing the app definition.
 */
export class GetAppResponseData {
  /**
   * The app definition attributes, such as name, description, and components.
   */
  "attributes": GetAppResponseDataAttributes;
  /**
   * The ID of the app.
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
    attributes: {
      baseName: "attributes",
      type: "GetAppResponseDataAttributes",
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
    return GetAppResponseData.attributeTypeMap;
  }

  public constructor() {}
}
