/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Current state of the grant associated with an approved request. Replaced means a newer grant superseded this grant. The newer grant might no longer be active. This field is absent for requests that weren't approved.
 */

export type TemporaryGrantRequestGrantState =
  | typeof ACTIVE
  | typeof EXPIRED
  | typeof REVOKED
  | typeof REPLACED
  | UnparsedObject;
export const ACTIVE = "active";
export const EXPIRED = "expired";
export const REVOKED = "revoked";
export const REPLACED = "replaced";
