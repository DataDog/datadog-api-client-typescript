/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3 } from "./EntityV3";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Create or update entity request.
 */

export type UpsertCatalogEntityRequest = EntityV3 | string | UnparsedObject;
