/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of a data projection request.
 */

export type DataProjectionRequestType = typeof DATA_PROJECTION | UnparsedObject;
export const DATA_PROJECTION = "data_projection";
