import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EmailAttributes } from "./EmailAttributes";
import { EmailType } from "./EmailType";

/**
 * Data for an on-call email resource.
 */
export class EmailData {
  /**
   * Attributes for an on-call email.
   */
  "attributes"?: EmailAttributes;
  /**
   * The email's unique identifier.
   */
  "id"?: string;
  /**
   * Indicates that the resource is of type 'emails'.
   */
  "type": EmailType;
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
      type: "EmailAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EmailType",
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
    return EmailData.attributeTypeMap;
  }

  public constructor() {}
}
