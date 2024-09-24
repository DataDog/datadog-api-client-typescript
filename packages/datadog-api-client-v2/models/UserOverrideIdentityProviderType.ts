/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `UserOverrideIdentityProviderType` object.
 */

export type UserOverrideIdentityProviderType =
  | typeof IDENTITY_PROVIDERS
  | UnparsedObject;
export const IDENTITY_PROVIDERS = "identity_providers";
