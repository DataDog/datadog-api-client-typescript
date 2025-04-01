/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Event category to identify the type of event. Only the value `change` is supported. Support for other categories are coming. please reach out to datadog support if you're interested.
*/

export type EventCategory = typeof CHANGE | UnparsedObject;
export const CHANGE = 'change';