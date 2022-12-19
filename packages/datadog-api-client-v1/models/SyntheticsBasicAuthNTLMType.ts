/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of authentication to use when performing the test.
 */

export type SyntheticsBasicAuthNTLMType = typeof NTLM | UnparsedObject;
export const NTLM = "ntlm";
