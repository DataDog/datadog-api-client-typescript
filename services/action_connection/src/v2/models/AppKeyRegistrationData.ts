import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppKeyRegistrationDataType } from "./AppKeyRegistrationDataType";

/**
 * Data related to the app key registration.
 */
export class AppKeyRegistrationData {
  /**
   * The app key registration identifier
   */
  "id"?: string;
  /**
   * The definition of `AppKeyRegistrationDataType` object.
   */
  "type": AppKeyRegistrationDataType;
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
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AppKeyRegistrationDataType",
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
    return AppKeyRegistrationData.attributeTypeMap;
  }

  public constructor() {}
}
