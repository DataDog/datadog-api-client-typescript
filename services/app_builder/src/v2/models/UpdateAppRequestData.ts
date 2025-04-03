import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppDefinitionType } from "./AppDefinitionType";
import { UpdateAppRequestDataAttributes } from "./UpdateAppRequestDataAttributes";

/**
 * The data object containing the new app definition. Any fields not included in the request remain unchanged.
 */
export class UpdateAppRequestData {
  /**
   * App definition attributes to be updated, such as name, description, and components.
   */
  "attributes"?: UpdateAppRequestDataAttributes;
  /**
   * The ID of the app to update. The app ID must match the ID in the URL path.
   */
  "id"?: string;
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
      type: "UpdateAppRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AppDefinitionType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UpdateAppRequestData.attributeTypeMap;
  }

  public constructor() {}
}
