/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an environment.
 */
export class EnvironmentAttributes {
  /**
   * The timestamp when the environment was created.
   */
  "createdAt"?: Date;
  /**
   * The description of the environment.
   */
  "description"?: string;
  /**
   * Indicates whether this is a production environment.
   */
  "isProduction"?: boolean;
  /**
   * The unique key of the environment.
   */
  "key"?: string;
  /**
   * The name of the environment.
   */
  "name": string;
  /**
   * List of queries to define the environment scope.
   */
  "queries"?: Array<string>;
  /**
   * Indicates whether feature flag changes require approval in this environment.
   */
  "requireFeatureFlagApproval"?: boolean;
  /**
   * The timestamp when the environment was last updated.
   */
  "updatedAt"?: Date;

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
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    isProduction: {
      baseName: "is_production",
      type: "boolean",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<string>",
    },
    requireFeatureFlagApproval: {
      baseName: "require_feature_flag_approval",
      type: "boolean",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
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
    return EnvironmentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
