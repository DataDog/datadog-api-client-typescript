/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An action that applies a mitigation.
 */
export class SecurityAgentInvestigationMitigationAction {
  /**
   * Whether the action has run.
   */
  "applied": boolean;
  /**
   * When the action ran.
   */
  "appliedAt"?: Date;
  /**
   * Who ran the action.
   */
  "appliedBy"?: string;
  /**
   * ID of the action in the Action Catalog.
   */
  "fqn"?: string;
  /**
   * ID of the action.
   */
  "id": string;
  /**
   * Name of the action in the Action Catalog.
   */
  "name"?: string;
  /**
   * The resource the action changes.
   */
  "resource"?: string;
  /**
   * Integration that runs the action, such as `dd`, `aws`, or `okta`.
   */
  "source": string;
  /**
   * Whether the organization has a connection that can run the action.
   */
  "sourceConnected": boolean;
  /**
   * What the action targets.
   */
  "target"?: string;

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
    applied: {
      baseName: "applied",
      type: "boolean",
      required: true,
    },
    appliedAt: {
      baseName: "applied_at",
      type: "Date",
      format: "date-time",
    },
    appliedBy: {
      baseName: "applied_by",
      type: "string",
    },
    fqn: {
      baseName: "fqn",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    resource: {
      baseName: "resource",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    sourceConnected: {
      baseName: "source_connected",
      type: "boolean",
      required: true,
    },
    target: {
      baseName: "target",
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
    return SecurityAgentInvestigationMitigationAction.attributeTypeMap;
  }

  public constructor() {}
}
