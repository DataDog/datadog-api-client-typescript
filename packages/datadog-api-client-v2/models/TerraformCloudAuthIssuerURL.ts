/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * HCP Terraform workload identity token issuer. Use `https://app.terraform.io` for HCP Terraform in the US or `https://app.eu.terraform.io` for HCP Terraform in Europe.
 */

export type TerraformCloudAuthIssuerURL =
  | typeof US
  | typeof EU
  | UnparsedObject;
export const US = "https://app.terraform.io";
export const EU = "https://app.eu.terraform.io";
