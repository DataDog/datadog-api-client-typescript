/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of source map. Always `il2cpp` for IL2CPP source maps.
 */

export type IL2CPPSourcemapMapKind = typeof IL2CPP | UnparsedObject;
export const IL2CPP = "il2cpp";
