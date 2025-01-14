/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPTokenAuth } from "./HTTPTokenAuth";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `HTTPCredentials` object.
 */

export type HTTPCredentials = HTTPTokenAuth | UnparsedObject;
