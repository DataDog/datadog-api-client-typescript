import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppDefinitionType } from "./AppDefinitionType";
import { UpdateAppResponseDataAttributes } from "./UpdateAppResponseDataAttributes";

/**
 * The data object containing the updated app definition.
 */
export class UpdateAppResponseData {
  /**
   * The updated app definition attributes, such as name, description, and components.
   */
  "attributes": UpdateAppResponseDataAttributes;
  /**
   * The ID of the updated app.
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
      type: "UpdateAppResponseDataAttributes",
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
    return UpdateAppResponseData.attributeTypeMap;
  }

  public constructor() {}
}
