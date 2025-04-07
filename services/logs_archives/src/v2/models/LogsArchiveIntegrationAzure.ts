import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Azure archive's integration destination.
 */
export class LogsArchiveIntegrationAzure {
  /**
   * A client ID.
   */
  "clientId": string;
  /**
   * A tenant ID.
   */
  "tenantId": string;
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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
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
    return LogsArchiveIntegrationAzure.attributeTypeMap;
  }

  public constructor() {}
}
