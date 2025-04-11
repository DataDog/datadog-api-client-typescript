import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAttributes } from "./SpansAttributes";
import { SpansType } from "./SpansType";

/**
 * Object description of a spans after being processed and stored by Datadog.
 */
export class Span {
  /**
   * JSON object containing all span attributes and their associated values.
   */
  "attributes"?: SpansAttributes;
  /**
   * Unique ID of the Span.
   */
  "id"?: string;
  /**
   * Type of the span.
   */
  "type"?: SpansType;
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
      type: "SpansAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SpansType",
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
    return Span.attributeTypeMap;
  }

  public constructor() {}
}
