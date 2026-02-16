import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatedBy } from "./CreatedBy";
import { ExternalSecretsManager } from "./ExternalSecretsManager";
import { PrivateActionsRunner } from "./PrivateActionsRunner";

/**
 * Attributes of an action connection.
 */
export class ConnectionDataAttributesResponse {
  /**
   * Indicates if the acting user can resolve the connection.
   */
  "actingUserCanResolve": boolean;
  /**
   * The creation timestamp of the connection.
   */
  "createdAt"?: Date;
  /**
   * Information about the user who created the resource.
   */
  "createdBy"?: CreatedBy;
  /**
   * The description of the connection.
   */
  "description"?: string;
  /**
   * External secrets manager configuration.
   */
  "externalSecretsManager": ExternalSecretsManager;
  /**
   * Integration configuration details.
   */
  "integration": any;
  /**
   * Indicates if the connection is marked as favorite.
   */
  "isFavorite": boolean;
  /**
   * The last updated timestamp of the connection.
   */
  "lastUpdated"?: Date;
  /**
   * The name of the connection.
   */
  "name": string;
  /**
   * Information about the private actions runner.
   */
  "privateActionsRunner"?: PrivateActionsRunner;
  /**
   * The ID of the runner associated with the connection.
   */
  "runnerId"?: string;
  /**
   * Tags associated with the connection.
   */
  "tags"?: Array<string>;
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
    actingUserCanResolve: {
      baseName: "acting_user_can_resolve",
      type: "boolean",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "CreatedBy",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    externalSecretsManager: {
      baseName: "external_secrets_manager",
      type: "ExternalSecretsManager",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "any",
      required: true,
    },
    isFavorite: {
      baseName: "is_favorite",
      type: "boolean",
      required: true,
    },
    lastUpdated: {
      baseName: "last_updated",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    privateActionsRunner: {
      baseName: "private_actions_runner",
      type: "PrivateActionsRunner",
    },
    runnerId: {
      baseName: "runner_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ConnectionDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
