/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Statuspage URL setting resource type.
 */

export type StatuspageUrlSettingType =
  | typeof STATUSPAGE_URL_SETTING
  | UnparsedObject;
export const STATUSPAGE_URL_SETTING = "statuspage-url-setting";
