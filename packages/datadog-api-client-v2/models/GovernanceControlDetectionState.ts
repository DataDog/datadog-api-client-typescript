/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The current state of the detection. Possible values are `active`, `exception`, `mitigated`, `inactive`, `obsolete`, `resolved_externally`, and `mitigation_in_progress`.
 */

export type GovernanceControlDetectionState =
  | typeof ACTIVE
  | typeof EXCEPTION
  | typeof MITIGATED
  | typeof INACTIVE
  | typeof OBSOLETE
  | typeof RESOLVED_EXTERNALLY
  | typeof MITIGATION_IN_PROGRESS
  | UnparsedObject;
export const ACTIVE = "active";
export const EXCEPTION = "exception";
export const MITIGATED = "mitigated";
export const INACTIVE = "inactive";
export const OBSOLETE = "obsolete";
export const RESOLVED_EXTERNALLY = "resolved_externally";
export const MITIGATION_IN_PROGRESS = "mitigation_in_progress";
