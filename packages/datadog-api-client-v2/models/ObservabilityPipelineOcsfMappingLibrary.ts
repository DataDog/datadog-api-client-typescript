/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Predefined library mappings for common log formats.
 */

export type ObservabilityPipelineOcsfMappingLibrary =
  | typeof CLOUDTRAIL_ACCOUNT_CHANGE
  | typeof GCP_CLOUD_AUDIT_CREATEBUCKET
  | typeof GCP_CLOUD_AUDIT_CREATESINK
  | typeof GCP_CLOUD_AUDIT_SETIAMPOLICY
  | typeof GCP_CLOUD_AUDIT_UPDATESINK
  | typeof GITHUB_AUDIT_LOG_API_ACTIVITY
  | typeof GOOGLE_WORKSPACE_ADMIN_AUDIT_ADDPRIVILEGE
  | typeof MICROSOFT_365_DEFENDER_INCIDENT
  | typeof MICROSOFT_365_DEFENDER_USERLOGGEDIN
  | typeof OKTA_SYSTEM_LOG_AUTHENTICATION
  | typeof PALO_ALTO_NETWORKS_FIREWALL_TRAFFIC
  | UnparsedObject;
export const CLOUDTRAIL_ACCOUNT_CHANGE = "CloudTrail Account Change";
export const GCP_CLOUD_AUDIT_CREATEBUCKET = "GCP Cloud Audit CreateBucket";
export const GCP_CLOUD_AUDIT_CREATESINK = "GCP Cloud Audit CreateSink";
export const GCP_CLOUD_AUDIT_SETIAMPOLICY = "GCP Cloud Audit SetIamPolicy";
export const GCP_CLOUD_AUDIT_UPDATESINK = "GCP Cloud Audit UpdateSink";
export const GITHUB_AUDIT_LOG_API_ACTIVITY = "Github Audit Log API Activity";
export const GOOGLE_WORKSPACE_ADMIN_AUDIT_ADDPRIVILEGE =
  "Google Workspace Admin Audit addPrivilege";
export const MICROSOFT_365_DEFENDER_INCIDENT =
  "Microsoft 365 Defender Incident";
export const MICROSOFT_365_DEFENDER_USERLOGGEDIN =
  "Microsoft 365 Defender UserLoggedIn";
export const OKTA_SYSTEM_LOG_AUTHENTICATION = "Okta System Log Authentication";
export const PALO_ALTO_NETWORKS_FIREWALL_TRAFFIC =
  "Palo Alto Networks Firewall Traffic";
