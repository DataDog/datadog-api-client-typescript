/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthDigest } from "./SyntheticsBasicAuthDigest";
import { SyntheticsBasicAuthNTLM } from "./SyntheticsBasicAuthNTLM";
import { SyntheticsBasicAuthOauthClient } from "./SyntheticsBasicAuthOauthClient";
import { SyntheticsBasicAuthOauthROP } from "./SyntheticsBasicAuthOauthROP";
import { SyntheticsBasicAuthSigv4 } from "./SyntheticsBasicAuthSigv4";
import { SyntheticsBasicAuthWeb } from "./SyntheticsBasicAuthWeb";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Object to handle basic authentication when performing the test.
*/

export type SyntheticsBasicAuth = SyntheticsBasicAuthWeb | SyntheticsBasicAuthSigv4 | SyntheticsBasicAuthNTLM | SyntheticsBasicAuthDigest | SyntheticsBasicAuthOauthClient | SyntheticsBasicAuthOauthROP | UnparsedObject;