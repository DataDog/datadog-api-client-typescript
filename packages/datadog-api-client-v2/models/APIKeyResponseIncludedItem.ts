/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LeakedKey } from "./LeakedKey";
import { User } from "./User";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An object related to an API key.
 */

export type APIKeyResponseIncludedItem = User | LeakedKey | UnparsedObject;
