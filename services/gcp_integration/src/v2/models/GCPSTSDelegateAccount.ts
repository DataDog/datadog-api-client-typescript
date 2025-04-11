import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPSTSDelegateAccountAttributes } from "./GCPSTSDelegateAccountAttributes";
import { GCPSTSDelegateAccountType } from "./GCPSTSDelegateAccountType";

/**
 * Datadog principal service account info.
 */
export class GCPSTSDelegateAccount {
  /**
   * Your delegate account attributes.
   */
  "attributes"?: GCPSTSDelegateAccountAttributes;
  /**
   * The ID of the delegate service account.
   */
  "id"?: string;
  /**
   * The type of account.
   */
  "type"?: GCPSTSDelegateAccountType;
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
      type: "GCPSTSDelegateAccountAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GCPSTSDelegateAccountType",
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
    return GCPSTSDelegateAccount.attributeTypeMap;
  }

  public constructor() {}
}
