import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The supported metadata for a degradation request.
 */
export class DegradationRequestMeta {
  /**
   * A unique key used to ensure idempotent requests.
   */
  "idempotencyKey"?: string;
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
    idempotencyKey: {
      baseName: "idempotency_key",
      type: "string",
      format: "uuid",
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
    return DegradationRequestMeta.attributeTypeMap;
  }

  public constructor() {}
}
