/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../util";

/**
 * The value to use for logs that don't have the facet used to group by.
 */

export type RUMGroupByMissing = string | number | UnparsedObject;
