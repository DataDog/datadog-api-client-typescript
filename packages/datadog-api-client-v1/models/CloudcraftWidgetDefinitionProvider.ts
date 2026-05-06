/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Cloud provider for the Cloudcraft widget.
 */

export type CloudcraftWidgetDefinitionProvider =
  | typeof AWS
  | typeof AZURE
  | typeof GCP
  | typeof NDM
  | typeof OCI
  | UnparsedObject;
export const AWS = "aws";
export const AZURE = "azure";
export const GCP = "gcp";
export const NDM = "ndm";
export const OCI = "oci";
