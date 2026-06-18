import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Datadog API key reference used by the Vercel integration to send telemetry.
 */
export class VercelApiKey {
  /**
   * ID of the Datadog API key used by the Vercel integration.
   */
  "id": string;
  /**
   * Value of the Datadog API key. Returned as an empty string in read responses.
   */
  "value": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return VercelApiKey.attributeTypeMap;
  }

  public constructor() {}
}
