/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertEventCustomAttributes } from "./AlertEventCustomAttributes";
import { ChangeEventCustomAttributes } from "./ChangeEventCustomAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON object for category-specific attributes. Schema is different per event category.
 */

export type EventPayloadAttributes =
  | ChangeEventCustomAttributes
  | AlertEventCustomAttributes
  | UnparsedObject;
