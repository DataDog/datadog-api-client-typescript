import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentResourceRequestAttributes } from "./ConfluentResourceRequestAttributes";
import { ConfluentResourceType } from "./ConfluentResourceType";

/**
 * JSON:API request for updating a Confluent resource.
 */
export class ConfluentResourceRequestData {
  /**
   * Attributes object for updating a Confluent resource.
   */
  "attributes": ConfluentResourceRequestAttributes;
  /**
   * The ID associated with a Confluent resource.
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
      type: "ConfluentResourceRequestAttributes",
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
    return ConfluentResourceRequestData.attributeTypeMap;
  }

  public constructor() {}
}
