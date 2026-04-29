import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * OAuth credentials for authenticating with the Databricks Zerobus ingestion API.
 */
export class ObservabilityPipelineDatabricksZerobusDestinationAuth {
  /**
   * Your service principal application ID (UUID).
   */
  "clientId": string;
  /**
   * Name of the environment variable or secret that holds the OAuth client secret used to authenticate with the Databricks ingestion endpoint.
   */
  "clientSecretKey"?: string;
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
    clientSecretKey: {
      baseName: "client_secret_key",
      type: "string",
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
    return ObservabilityPipelineDatabricksZerobusDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
