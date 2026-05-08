/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the organization that sent the email.
 */
export class TransportWebhookLogOrgMetadata {
  /**
   * Country code or name used for billing purposes.
   */
  "billingCountry"?: string;
  /**
   * The Datadog billing plan for the organization (for example, "pro", "enterprise").
   */
  "billingPlan"?: string;
  /**
   * Support or account tier assigned to the organization (for example, "tier-1").
   */
  "customerTier"?: string;
  /**
   * Primary email domain associated with the organization (for example, "example.com").
   */
  "domain"?: string;
  /**
   * Industry classification of the organization (for example, "technology", "finance").
   */
  "industry"?: string;
  /**
   * Whether the organization is enrolled in the Datadog bug bounty program.
   */
  "isBugbounty"?: string;
  /**
   * Whether the organization operates as a Managed Service Provider managing child orgs.
   */
  "isMsp"?: string;
  /**
   * Display name of the organization as configured in Datadog account settings.
   */
  "name"?: string;
  /**
   * Globally unique identifier for the Datadog organization (UUID v1 format).
   */
  "orgUuid"?: string;
  /**
   * Identifier of the immediate parent organization, if this is a child org.
   */
  "parentOrgId"?: string;
  /**
   * Whether the organization has a premium support plan with Datadog.
   */
  "premiumSupport"?: string;
  /**
   * Identifier of the top-level parent organization in a multi-org account hierarchy.
   */
  "rootOrgId"?: string;
  /**
   * Display name of the top-level parent organization in a multi-org account hierarchy.
   */
  "rootOrgName"?: string;
  /**
   * Country code or name used for shipping or regional assignment.
   */
  "shippingCountry"?: string;
  /**
   * Website URL provided during organization registration.
   */
  "website"?: string;
  /**
   * ISO 8601 timestamp of when the Datadog organization was created.
   */
  "whenCreated"?: string;

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
    billingCountry: {
      baseName: "billing_country",
      type: "string",
    },
    billingPlan: {
      baseName: "billing_plan",
      type: "string",
    },
    customerTier: {
      baseName: "customer_tier",
      type: "string",
    },
    domain: {
      baseName: "domain",
      type: "string",
    },
    industry: {
      baseName: "industry",
      type: "string",
    },
    isBugbounty: {
      baseName: "is_bugbounty",
      type: "string",
    },
    isMsp: {
      baseName: "is_msp",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    orgUuid: {
      baseName: "org_uuid",
      type: "string",
    },
    parentOrgId: {
      baseName: "parent_org_id",
      type: "string",
    },
    premiumSupport: {
      baseName: "premium_support",
      type: "string",
    },
    rootOrgId: {
      baseName: "root_org_id",
      type: "string",
    },
    rootOrgName: {
      baseName: "root_org_name",
      type: "string",
    },
    shippingCountry: {
      baseName: "shipping_country",
      type: "string",
    },
    website: {
      baseName: "website",
      type: "string",
    },
    whenCreated: {
      baseName: "when_created",
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
    return TransportWebhookLogOrgMetadata.attributeTypeMap;
  }

  public constructor() {}
}
