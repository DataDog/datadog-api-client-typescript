/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Email domain allowlist allowlist type.
 */

export type DomainAllowlistType = typeof DOMAIN_ALLOWLIST | UnparsedObject;
export const DOMAIN_ALLOWLIST = "domain_allowlist";
