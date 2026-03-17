import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for registering a token.
 */
export class OnPremManagementServiceRegisterTokenAttributes {
  /**
   * The application identifier.
   */
  "appId"?: string;
  /**
   * The application version.
   */
  "appVersion"?: number;
  /**
   * The connection identifier.
   */
  "connectionId": string;
  /**
   * The query identifier.
   */
  "queryId"?: string;
  /**
   * The on-prem runner identifier.
   */
  "runnerId": string;
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
    appId: {
      baseName: "app_id",
      type: "string",
      format: "uuid",
    },
    appVersion: {
      baseName: "app_version",
      type: "number",
      format: "int64",
    },
    connectionId: {
      baseName: "connection_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    queryId: {
      baseName: "query_id",
      type: "string",
      format: "uuid",
    },
    runnerId: {
      baseName: "runner_id",
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
    return OnPremManagementServiceRegisterTokenAttributes.attributeTypeMap;
  }

  public constructor() {}
}
