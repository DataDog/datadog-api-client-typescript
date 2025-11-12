import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EmailData } from "./EmailData";

/**
 * On-Call User Email.
 */
export class Email {
  /**
   * Data for an on-call email resource.
   */
  "data"?: EmailData;
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
    data: {
      baseName: "data",
      type: "EmailData",
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
    return Email.attributeTypeMap;
  }

  public constructor() {}
}
