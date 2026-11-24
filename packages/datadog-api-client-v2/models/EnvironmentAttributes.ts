/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EnvironmentSubjectAuthorizationState } from "./EnvironmentSubjectAuthorizationState";

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
   * Indicates whether this is a production environment.
   */
  "isProduction"?: boolean;
  /**
   * The name of the environment.
   */
  "name": string;
  /**
   * Indicates whether feature flag evaluation events include original targeting identifiers and full evaluation context.
   */
  "observeFullEvaluationData"?: boolean;
  /**
   * List of queries to define the environment scope.
   */
  "queries"?: Array<string>;
  /**
   * Indicates whether feature flag changes require approval in this environment.
   */
  "requireFeatureFlagApproval"?: boolean;
  /**
   * The associated Custom OIDC provider ID, or `null` when no provider is associated. Disabled environments may retain a provider association.
   */
  "subjectAuthorizationOidcProviderId"?: string;
  /**
   * Whether assignment requests for this environment require subject authorization. Allowed values are `disabled` and `enabled`. Enabling requires a provider ID formatted as a nonzero UUID. If omitted on create, defaults to `disabled`. If omitted on update, the stored state is preserved. `null` is not accepted. This setting applies only to the current Datadog site and is not copied to other sites. Before you enable it, configure an eligible Custom OIDC provider in the same organization and site, and verify that the provider's keys are published. Assignment requests fail when the required verification configuration is unavailable.
   */
  "subjectAuthorizationState"?: EnvironmentSubjectAuthorizationState;
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
    isProduction: {
      baseName: "is_production",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    observeFullEvaluationData: {
      baseName: "observe_full_evaluation_data",
      type: "boolean",
    },
    queries: {
      baseName: "queries",
      type: "Array<string>",
    },
    requireFeatureFlagApproval: {
      baseName: "require_feature_flag_approval",
      type: "boolean",
    },
    subjectAuthorizationOidcProviderId: {
      baseName: "subject_authorization_oidc_provider_id",
      type: "string",
      format: "uuid",
    },
    subjectAuthorizationState: {
      baseName: "subject_authorization_state",
      type: "EnvironmentSubjectAuthorizationState",
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
