/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Your Google Cloud Platform Account.
 */
export class GCPAccount {
  /**
   * Should be `https://www.googleapis.com/oauth2/v1/certs`.
   */
  "authProviderX509CertUrl"?: string;
  /**
   * Should be `https://accounts.google.com/o/oauth2/auth`.
   */
  "authUri"?: string;
  /**
   * Silence monitors for expected GCE instance shutdowns.
   */
  "automute"?: boolean;
  /**
   * Your email found in your JSON service account key.
   */
  "clientEmail"?: string;
  /**
   * Your ID found in your JSON service account key.
   */
  "clientId"?: string;
  /**
   * Should be `https://www.googleapis.com/robot/v1/metadata/x509/$CLIENT_EMAIL`
   * where `$CLIENT_EMAIL` is the email found in your JSON service account key.
   */
  "clientX509CertUrl"?: string;
  /**
   * Limit the Cloud Run revisions that are pulled into Datadog by using tags.
   * Only Cloud Run revision resources that apply to specified filters are imported into Datadog.
   */
  "cloudRunRevisionFilters"?: Array<string>;
  /**
   * An array of errors.
   */
  "errors"?: Array<string>;
  /**
   * Limit the GCE instances that are pulled into Datadog by using tags.
   * Only hosts that match one of the defined tags are imported into Datadog.
   */
  "hostFilters"?: string;
  /**
   * When enabled, Datadog will activate the Cloud Security Monitoring product for this service account. Note: This requires resource_collection_enabled to be set to true.
   */
  "isCspmEnabled"?: boolean;
  /**
   * When enabled, Datadog scans for all resource change data in your Google Cloud environment.
   */
  "isResourceChangeCollectionEnabled"?: boolean;
  /**
   * When enabled, Datadog will attempt to collect Security Command Center Findings. Note: This requires additional permissions on the service account.
   */
  "isSecurityCommandCenterEnabled"?: boolean;
  /**
   * Your private key name found in your JSON service account key.
   */
  "privateKey"?: string;
  /**
   * Your private key ID found in your JSON service account key.
   */
  "privateKeyId"?: string;
  /**
   * Your Google Cloud project ID found in your JSON service account key.
   */
  "projectId"?: string;
  /**
   * When enabled, Datadog scans for all resources in your GCP environment.
   */
  "resourceCollectionEnabled"?: boolean;
  /**
   * Should be `https://accounts.google.com/o/oauth2/token`.
   */
  "tokenUri"?: string;
  /**
   * The value for service_account found in your JSON service account key.
   */
  "type"?: string;

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
    authProviderX509CertUrl: {
      baseName: "auth_provider_x509_cert_url",
      type: "string",
    },
    authUri: {
      baseName: "auth_uri",
      type: "string",
    },
    automute: {
      baseName: "automute",
      type: "boolean",
    },
    clientEmail: {
      baseName: "client_email",
      type: "string",
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    clientX509CertUrl: {
      baseName: "client_x509_cert_url",
      type: "string",
    },
    cloudRunRevisionFilters: {
      baseName: "cloud_run_revision_filters",
      type: "Array<string>",
    },
    errors: {
      baseName: "errors",
      type: "Array<string>",
    },
    hostFilters: {
      baseName: "host_filters",
      type: "string",
    },
    isCspmEnabled: {
      baseName: "is_cspm_enabled",
      type: "boolean",
    },
    isResourceChangeCollectionEnabled: {
      baseName: "is_resource_change_collection_enabled",
      type: "boolean",
    },
    isSecurityCommandCenterEnabled: {
      baseName: "is_security_command_center_enabled",
      type: "boolean",
    },
    privateKey: {
      baseName: "private_key",
      type: "string",
    },
    privateKeyId: {
      baseName: "private_key_id",
      type: "string",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
    },
    tokenUri: {
      baseName: "token_uri",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPAccount.attributeTypeMap;
  }

  public constructor() {}
}
