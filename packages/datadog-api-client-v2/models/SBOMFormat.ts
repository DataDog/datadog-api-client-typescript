/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The SBOM standard
 */

export type SBOMFormat = typeof CYCLONEDX | typeof SPDX | UnparsedObject;
export const CYCLONEDX = "CycloneDX";
export const SPDX = "SPDX";
