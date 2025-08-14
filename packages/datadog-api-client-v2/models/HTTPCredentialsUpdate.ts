/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPBasicAuthUpdate } from "./HTTPBasicAuthUpdate";
import { HTTPMtlsAuthUpdate } from "./HTTPMtlsAuthUpdate";
import { HTTPTokenAuthUpdate } from "./HTTPTokenAuthUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of the `HTTPCredentialsUpdate` object.
 */

export type HTTPCredentialsUpdate =
  | HTTPTokenAuthUpdate
  | HTTPBasicAuthUpdate
  | HTTPMtlsAuthUpdate
  | UnparsedObject;
