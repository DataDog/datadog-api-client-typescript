/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The delivery format for dashboard report schedules, or `null` if not set.
*/

export type ReportScheduleResponseAttributesDeliveryFormat = typeof PDF| typeof PNG| typeof PDF_AND_PNG | UnparsedObject;
export const PDF = 'pdf';
export const PNG = 'png';
export const PDF_AND_PNG = 'pdf_and_png';