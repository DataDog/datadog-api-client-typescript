/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthNTLM } from "./SyntheticsBasicAuthNTLM";
import { SyntheticsBasicAuthSigv4 } from "./SyntheticsBasicAuthSigv4";
import { SyntheticsBasicAuthWeb } from "./SyntheticsBasicAuthWeb";

import { UnparsedObject } from "../util";

/**
 * Object to handle basic authentication when performing the test.
 */

export type SyntheticsBasicAuth =
  | SyntheticsBasicAuthWeb
  | SyntheticsBasicAuthSigv4
  | SyntheticsBasicAuthNTLM
  | UnparsedObject;
