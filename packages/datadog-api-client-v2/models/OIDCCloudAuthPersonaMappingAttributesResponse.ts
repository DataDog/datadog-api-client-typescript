/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OIDCCloudAuthClaimMatcher } from "./OIDCCloudAuthClaimMatcher";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Stored Custom OIDC persona mapping attributes.
 */
export class OIDCCloudAuthPersonaMappingAttributesResponse {
  /**
   * Handle resolved when the mapping was created; not updated if the account handle changes.
   */
  "accountIdentifier"?: string;
  /**
   * UUID of the Datadog user or service account to authenticate as.
   */
  "accountUuid"?: string;
  /**
   * Every claim condition must match. Supply claim_matchers or identity_pattern, but not both.
   */
  "claimMatchers"?: Array<OIDCCloudAuthClaimMatcher>;
  /**
   * Time the configuration was created.
   */
  "createdAt"?: Date;
  /**
   * UUID of the user who created the configuration.
   */
  "createdBy"?: string;
  /**
   * Legacy glob pattern matched against the provider identity claim. Supply this or claim_matchers, but not both. Prefer claim_matchers with exact mode for a single Kubernetes service account.
   */
  "identityPattern"?: string;
  /**
   * UUID of the registered Custom OIDC provider.
   */
  "providerId"?: string;

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
    accountIdentifier: {
      baseName: "account_identifier",
      type: "string",
    },
    accountUuid: {
      baseName: "account_uuid",
      type: "string",
    },
    claimMatchers: {
      baseName: "claim_matchers",
      type: "Array<OIDCCloudAuthClaimMatcher>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      format: "uuid",
    },
    identityPattern: {
      baseName: "identity_pattern",
      type: "string",
    },
    providerId: {
      baseName: "provider_id",
      type: "string",
      format: "uuid",
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
    return OIDCCloudAuthPersonaMappingAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
