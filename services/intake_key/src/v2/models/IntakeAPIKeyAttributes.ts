import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an intake API key returned after successful authentication.
 */
export class IntakeAPIKeyAttributes {
  /**
   * The Datadog API key the workload can use to send telemetry.
   */
  "apiKey": string;
  /**
   * The numeric ID of the Datadog organization the API key belongs to.
   */
  "orgId": number;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
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
    return IntakeAPIKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
