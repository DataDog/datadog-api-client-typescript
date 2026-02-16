import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRuleResponseDataAttributesCreatedBy } from "./DeploymentRuleResponseDataAttributesCreatedBy";
import { DeploymentRuleResponseDataAttributesType } from "./DeploymentRuleResponseDataAttributesType";
import { DeploymentRuleResponseDataAttributesUpdatedBy } from "./DeploymentRuleResponseDataAttributesUpdatedBy";

/**
 * Basic information about a deployment rule.
 */
export class DeploymentRuleResponseDataAttributes {
  /**
   * The timestamp when the deployment rule was created.
   */
  "createdAt": Date;
  /**
   * Information about the user who created the deployment rule.
   */
  "createdBy": DeploymentRuleResponseDataAttributesCreatedBy;
  /**
   * Whether this rule is run in dry-run mode.
   */
  "dryRun": boolean;
  /**
   * The ID of the deployment gate.
   */
  "gateId": string;
  /**
   * The name of the deployment rule.
   */
  "name": string;
  /**
   * Options for deployment rule response representing either faulty deployment detection or monitor options. The actual type is determined by the parent's 'type' field.
   */
  "options": any;
  /**
   * The type of the deployment rule.
   */
  "type": DeploymentRuleResponseDataAttributesType;
  /**
   * The timestamp when the deployment rule was last updated.
   */
  "updatedAt"?: Date;
  /**
   * Information about the user who updated the deployment rule.
   */
  "updatedBy"?: DeploymentRuleResponseDataAttributesUpdatedBy;
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
      type: "DeploymentRuleResponseDataAttributesCreatedBy",
      required: true,
    },
    dryRun: {
      baseName: "dry_run",
      type: "boolean",
      required: true,
    },
    gateId: {
      baseName: "gate_id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "any",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeploymentRuleResponseDataAttributesType",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "DeploymentRuleResponseDataAttributesUpdatedBy",
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
    return DeploymentRuleResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
