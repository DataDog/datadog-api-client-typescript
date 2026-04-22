/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The enforcement tier of the policy. `DEFAULT` means the policy is set but member orgs may mutate it. `ENFORCE` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value.
 */

export type OrgGroupPolicyEnforcementTier =
  | typeof DEFAULT
  | typeof ENFORCE
  | typeof DELEGATE
  | UnparsedObject;
export const DEFAULT = "DEFAULT";
export const ENFORCE = "ENFORCE";
export const DELEGATE = "DELEGATE";
