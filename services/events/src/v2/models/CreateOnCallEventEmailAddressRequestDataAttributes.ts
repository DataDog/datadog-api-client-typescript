import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class CreateOnCallEventEmailAddressRequestDataAttributes {
  "alertType"?: string;
  "description"?: string;
  "format": string;
  "tags": Array<string>;
  "teamHandle"?: string;
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
    alertType: {
      baseName: "alert_type",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    format: {
      baseName: "format",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    teamHandle: {
      baseName: "team_handle",
      type: "string",
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
    return CreateOnCallEventEmailAddressRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
