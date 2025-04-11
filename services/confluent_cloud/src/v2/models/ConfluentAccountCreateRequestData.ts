import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentAccountCreateRequestAttributes } from "./ConfluentAccountCreateRequestAttributes";
import { ConfluentAccountType } from "./ConfluentAccountType";

/**
 * The data body for adding a Confluent account.
 */
export class ConfluentAccountCreateRequestData {
  /**
   * Attributes associated with the account creation request.
   */
  "attributes": ConfluentAccountCreateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `confluent-cloud-accounts`.
   */
  "type": ConfluentAccountType;
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
      type: "ConfluentAccountCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfluentAccountType",
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
    return ConfluentAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
