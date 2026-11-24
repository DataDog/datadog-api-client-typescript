/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EnvironmentSubjectAuthorizationState } from "./EnvironmentSubjectAuthorizationState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a new environment.
 */
export class CreateEnvironmentAttributes {
  /**
   * Indicates whether this is a production environment.
   */
  "isProduction"?: boolean;
  /**
   * The name of the environment. Required on every request and unique within the organization. Must contain 1 to 200 ASCII characters, start with a letter or digit, and contain only letters, digits, spaces, underscores, hyphens, and periods.
   */
  "name": string;
  /**
   * Controls whether feature flag evaluation events may include original targeting identifiers and full evaluation context. When true, SDKs may include this data. When false, SDKs hash targeting identifiers and omit evaluation context. If omitted, defaults to false.
   */
  "observeFullEvaluationData"?: boolean;
  /**
   * Required list of at least one exact DD_ENV value associated with this environment. Values cannot be used by another environment in the same organization. Wildcards and search expressions are not supported.
   */
  "queries": Array<string>;
  /**
   * Indicates whether feature flag changes require approval in this environment.
   */
  "requireFeatureFlagApproval"?: boolean;
  /**
   * The ID of a Custom OIDC provider, formatted as a nonzero UUID. Required when `subject_authorization_state` is `enabled`. If omitted or `null`, no provider is associated. A non-null ID must be registered in the current organization and site, even when subject authorization is disabled. An unregistered ID returns `400 Bad Request`, and an unavailable registry returns `503 Service Unavailable`. Saving does not verify provider eligibility or key publication.
   */
  "subjectAuthorizationOidcProviderId"?: string;
  /**
   * Whether assignment requests for this environment require subject authorization. Allowed values are `disabled` and `enabled`. Enabling requires a provider ID formatted as a nonzero UUID. If omitted on create, defaults to `disabled`. If omitted on update, the stored state is preserved. `null` is not accepted. This setting applies only to the current Datadog site and is not copied to other sites. Before you enable it, configure an eligible Custom OIDC provider in the same organization and site, and verify that the provider's keys are published. Assignment requests fail when the required verification configuration is unavailable.
   */
  "subjectAuthorizationState"?: EnvironmentSubjectAuthorizationState;

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
      required: true,
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateEnvironmentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
