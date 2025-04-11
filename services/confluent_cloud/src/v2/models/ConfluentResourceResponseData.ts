import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentResourceResponseAttributes } from "./ConfluentResourceResponseAttributes";
import { ConfluentResourceType } from "./ConfluentResourceType";

/**
 * Confluent Cloud resource data.
 */
export class ConfluentResourceResponseData {
  /**
   * Model representation of a Confluent Cloud resource.
   */
  "attributes": ConfluentResourceResponseAttributes;
  /**
   * The ID associated with the Confluent resource.
   */
  "id": string;
  /**
   * The JSON:API type for this request.
   */
  "type": ConfluentResourceType;
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
      type: "ConfluentResourceResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfluentResourceType",
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
    return ConfluentResourceResponseData.attributeTypeMap;
  }

  public constructor() {}
}
