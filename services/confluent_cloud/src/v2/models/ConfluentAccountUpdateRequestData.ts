import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentAccountType } from "./ConfluentAccountType";
import { ConfluentAccountUpdateRequestAttributes } from "./ConfluentAccountUpdateRequestAttributes";

/**
 * Data object for updating a Confluent account.
 */
export class ConfluentAccountUpdateRequestData {
  /**
   * Attributes object for updating a Confluent account.
   */
  "attributes": ConfluentAccountUpdateRequestAttributes;
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
      type: "ConfluentAccountUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfluentAccountType",
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
    return ConfluentAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
