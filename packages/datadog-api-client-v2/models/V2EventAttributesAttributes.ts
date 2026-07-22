/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertEventAttributes } from "./AlertEventAttributes";
import { ChangeEventAttributes } from "./ChangeEventAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * JSON object for category-specific attributes.
*/

export type V2EventAttributesAttributes = ChangeEventAttributes | AlertEventAttributes | UnparsedObject;