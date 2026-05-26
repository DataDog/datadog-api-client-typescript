/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Default rulesets per language resource type.
 */

export type DefaultRulesetsPerLanguageDataType =
  | typeof DEFAULT_RULESETS_PER_LANGUAGE
  | UnparsedObject;
export const DEFAULT_RULESETS_PER_LANGUAGE = "defaultRulesetsPerLanguage";
