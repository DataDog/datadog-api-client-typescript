/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the resource. The value should always be `entra_id_azure_app_registrations`.
 */

export type SecurityMonitoringEntraIdAzureAppRegistrationsResourceType =
  | typeof ENTRA_ID_AZURE_APP_REGISTRATIONS
  | UnparsedObject;
export const ENTRA_ID_AZURE_APP_REGISTRATIONS =
  "entra_id_azure_app_registrations";
