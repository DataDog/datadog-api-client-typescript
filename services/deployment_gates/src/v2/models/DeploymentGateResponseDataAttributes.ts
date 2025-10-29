import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateResponseDataAttributesCreatedBy } from "./DeploymentGateResponseDataAttributesCreatedBy";
import { DeploymentGateResponseDataAttributesUpdatedBy } from "./DeploymentGateResponseDataAttributesUpdatedBy";

/**
 * Basic information about a deployment gate.
 */
export class DeploymentGateResponseDataAttributes {
  /**
   * The timestamp when the deployment gate was created.
   */
  "createdAt": Date;
  /**
   * Information about the user who created the deployment gate.
   */
  "createdBy": DeploymentGateResponseDataAttributesCreatedBy;
  /**
   * Whether this gate is run in dry-run mode.
   */
  "dryRun": boolean;
  /**
   * The environment of the deployment gate.
   */
  "env": string;
  /**
   * The identifier of the deployment gate.
   */
  "identifier": string;
  /**
   * The service of the deployment gate.
   */
  "service": string;
  /**
   * The timestamp when the deployment gate was last updated.
   */
  "updatedAt"?: Date;
  /**
   * Information about the user who updated the deployment gate.
   */
  "updatedBy"?: DeploymentGateResponseDataAttributesUpdatedBy;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "DeploymentGateResponseDataAttributesCreatedBy",
      required: true,
    },
    dryRun: {
      baseName: "dry_run",
      type: "boolean",
      required: true,
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    identifier: {
      baseName: "identifier",
      type: "string",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "DeploymentGateResponseDataAttributesUpdatedBy",
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
    return DeploymentGateResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
